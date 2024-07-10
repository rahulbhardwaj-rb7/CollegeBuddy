import EpIpModel from "../models/ep_ip.js";
import EpOverviewModel from "../models/ep_overview.js";
import EpRegulatoryModel from "../models/ep_regulatory.js";
import UsIPModel from "../models/us_ip.js";
import usLitigationSummaryModel from "../models/us_litigation_summary.js";
import UsOverviewModel from "../models/us_overview.js";
import UsRegulatoryModel from "../models/us_regulatory.js";

const getBasicSearchDataForUS = async (req, res) => {
  try {
    if (!req.body.simpleSearch) {
      return res.status(400).json({
        status: 400,
        message: "Simple search query is required.",
      });
    }

    const searchRegex = new RegExp(req.body.simpleSearch, 'i');
    console.log("req.body.simpleSearch:", req.body.simpleSearch);
    console.log("searchQuery:", searchRegex);

    const searchQuery1 = {
      $or: [
        { "ndaNumber": searchRegex },
        { "brandName": searchRegex },
        { "activeIngredient": searchRegex },
        { "company": searchRegex },
        { "therapeuticClass": searchRegex },
      ]
    };

    const uniqueNdaNumbers = new Set();
    const searchResults = [];

    const processResults = async (records) => {
      for (const record of records) {
        if (!uniqueNdaNumbers.has(record.ndaNumber)) {
          uniqueNdaNumbers.add(record.ndaNumber);

          const recordResults = await UsOverviewModel.find({ ndaNumber: record.ndaNumber });
          for (const rec of recordResults) {
            const regulatoryResults = await UsRegulatoryModel.find({ ndaNumber: rec.ndaNumber });
            const dateOfApproval = regulatoryResults.length > 0 ? regulatoryResults[0].dateOfApproval : null;
            const combinedResult = {
              ...rec._doc,
              dateOfApproval: dateOfApproval
            };
            searchResults.push(combinedResult);
          }
        }
      }
    };

    const overviewResults = await UsOverviewModel.find(searchQuery1);
    if (overviewResults.length > 0) {
      await processResults(overviewResults);
    } else {
      const ipResults = await UsIPModel.find({ patentNumber: req.body.simpleSearch });
      if (ipResults.length > 0) {
        await processResults(ipResults);
      } else {
        const litigationResults = await usLitigationSummaryModel.find({ caseNumber: req.body.simpleSearch });
        if (litigationResults.length > 0) {
          await processResults(litigationResults);
        }
      }
    }

    if (searchResults.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Search successful",
        result: searchResults,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "No value found"
      });
    }

  } catch (error) {
    console.error('Error performing global search:', error);
    res.status(500).json({
      status: 500,
      message: "An error occurred while performing the search",
      error: error.message,
    });
  }
};
const getAdvanceSearchDataForUS = async (req, res) => {
  try {
    const { brandName, activeIngredient, ndaNumber, therapeuticClass, patentNumber, caseNumber } = req.body;
    const searchQuery = {
      $or: [
        { ndaNumber: new RegExp(ndaNumber, 'i') },
        { brandName: new RegExp(brandName, 'i') },
        { activeIngredient: new RegExp(activeIngredient, 'i') },
        { therapeuticClass: new RegExp(therapeuticClass, 'i') }
      ]
    };
    const uniqueNdaNumbers = new Set();
    const ndaNumbers = [];
    const searchResults = [];
    console.log("searchQuery:", searchQuery);

    const getUniqueNdaNumbers = async (records) => {
      for (let record of records) {
        if (!uniqueNdaNumbers.has(record.ndaNumber)) {
          uniqueNdaNumbers.add(record.ndaNumber);
          ndaNumbers.push(record.ndaNumber)
        }
      }
    };
    if (brandName || activeIngredient || ndaNumber || therapeuticClass) {
      const overviewRequest = await UsOverviewModel.find(searchQuery);
      if (overviewRequest.length > 0) {
        getUniqueNdaNumbers(overviewRequest);
      }
    }
    if (patentNumber) {
      const ipRequest = await UsIPModel.find({ patentNumber: new RegExp(patentNumber, 'i') });
      if (ipRequest.length > 0) {
        getUniqueNdaNumbers(ipRequest);
      }
    }
    if (caseNumber) {
      const litigationRequest = await usLitigationSummaryModel.find({ caseNumber: new RegExp(caseNumber, 'i') });
      if (litigationRequest.length > 0) {
        getUniqueNdaNumbers(litigationRequest);
      }
    }
    if (ndaNumbers.length > 0) {
      for (const record of ndaNumbers) {
        const recordResults = await UsOverviewModel.find({ ndaNumber: record });
        for (const rec of recordResults) {
          const regulatoryResults = await UsRegulatoryModel.find({ ndaNumber: rec.ndaNumber });
          const dateOfApproval = regulatoryResults.length > 0 ? regulatoryResults[0].dateOfApproval : null;
          const combinedResult = {
            ...rec._doc,
            dateOfApproval: dateOfApproval
          };
          searchResults.push(combinedResult);
        }
      }
    }
    if (searchResults.length > 0) {
      res.status(200).json({
        status: 200,
        message: "Search successful",
        result: searchResults,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "No value found"
      });
    }
  } catch (error) {
    console.error('Error performing specific search:', error);
    res.status(500).json({
      status: 500,
      message: "An error occurred while performing the search",
      error: error.message,
    });
  }
};

const getBasicSearchDataForEP = async (req, res) => {
  try {
    if (!req.body.simpleSearch) {
      return res.status(400).json({
        status: 400,
        message: "Simple search query is required.",
      });
    }

    const searchRegex = new RegExp(req.body.simpleSearch, 'i');
    console.log("req.body.simpleSearch:", req.body.simpleSearch);
    console.log("searchQuery:", searchRegex);

    const searchQuery1 = {
      $or: [
        { "agencyProductNumber": searchRegex },
        { "brandName": searchRegex },
        { "activeIngredient": searchRegex },
        { "company": searchRegex },
        { "therapeuticClass": searchRegex },
      ]
    };

    const uniqueAgencyProductNumbers = new Set();
    const searchResults = [];

    const processResults = async (records) => {
      for (const record of records) {
        if (!uniqueAgencyProductNumbers.has(record.agencyProductNumber)) {
          uniqueAgencyProductNumbers.add(record.agencyProductNumber);

          const recordResults = await EpOverviewModel.find({ agencyProductNumber: record.agencyProductNumber });
          for (const rec of recordResults) {
            const regulatoryResults = await EpRegulatoryModel.find({ agencyProductNumber: rec.agencyProductNumber });
            const dateOfApproval = regulatoryResults.length > 0 ? regulatoryResults[0].dateOfApproval : null;
            const combinedResult = {
              ...rec._doc,
              dateOfApproval: dateOfApproval
            };
            searchResults.push(combinedResult);
          }
        }
      }
    };

    const overviewResults = await EpOverviewModel.find(searchQuery1);
    if (overviewResults.length > 0) {
      await processResults(overviewResults);
    } else {
      const ipResults = await EpIpModel.find({ patentNumber: req.body.simpleSearch });
      if (ipResults.length > 0) {
        await processResults(ipResults);
      }
    }
    if (searchResults.length > 0) {
      res.json({
        status: 200,
        message: "Search successful",
        result: searchResults,
      });
    } else {
      res.json({
        status: 401,
        message: "No value found"
      });
    }
  } catch (error) {
    console.error('Error performing global search:', error);
    res.status(500).json({
      status: 500,
      message: "An error occurred while performing the search",
      error: error.message,
    });
  }
};
const getAdvanceSearchDataForEP = async (req, res) => {
  try {
    const { brandName, activeIngredient, agencyProductNumber, therapeuticClass, patentNumber } = req.body;
    const searchQuery = {
      $or: [
        { agencyProductNumber: new RegExp(agencyProductNumber, 'i') },
        { brandName: new RegExp(brandName, 'i') },
        { activeIngredient: new RegExp(activeIngredient, 'i') },
        { therapeuticClass: new RegExp(therapeuticClass, 'i') }
      ]
    };
    const uniqueAgencyProductNumber = new Set();
    const agencyProductNumbers = [];
    const searchResults = [];
    console.log("searchQuery:", searchQuery);

    const getUniqueAgencyProductNumber = async (records) => {
      for (let record of records) {
        if (!uniqueAgencyProductNumber.has(record.ndaNumber)) {
          uniqueAgencyProductNumber.add(record.ndaNumber);
          ndaNumbers.push(record.ndaNumber)
        }
      }
    };
    if (brandName || activeIngredient || ndaNumber || therapeuticClass) {
      const overviewRequest = await EpOverviewModel.find(searchQuery);
      if (overviewRequest.length > 0) {
        getUniqueAgencyProductNumber(overviewRequest);
      }
    }
    if (patentNumber) {
      const ipRequest = await EpIpModel.find({ patentNumber: new RegExp(patentNumber, 'i') });
      if (ipRequest.length > 0) {
        getUniqueAgencyProductNumber(ipRequest);
      }
    }
    if (agencyProductNumbers.length > 0) {
      for (const record of ndaNumbers) {
        const recordResults = await EpOverviewModel.find({ agencyProductNumber: record });
        for (const rec of recordResults) {
          const regulatoryResults = await EpRegulatoryModel.find({ agencyProductNumber: rec.agencyProductNumber });
          const dateOfApproval = regulatoryResults.length > 0 ? regulatoryResults[0].dateOfApproval : null;
          const combinedResult = {
            ...rec._doc,
            dateOfApproval: dateOfApproval
          };
          searchResults.push(combinedResult);
        }
      }
    }
    if (searchResults.length > 0) {
      res.json({
        status: 200,
        message: "Search successful",
        result: searchResults,
      });
    } else {
      res.json({
        status: 401,
        message: "No value found"
      });
    }
  } catch (error) {
    console.error('Error performing specific search:', error);
    res.status(500).json({
      status: 500,
      message: "An error occurred while performing the search",
      error: error.message,
    });
  }
};

export { getBasicSearchDataForUS, getAdvanceSearchDataForUS, getBasicSearchDataForEP, getAdvanceSearchDataForEP };
