import EpOverviewModel from "../models/ep_overview.js";
import UsOverviewModel from "../models/us_overview.js";

const getBasicSearchDataForUS = async (req, res) => {
  try {
    const searchRegex = new RegExp(req.body.simpleSearch, 'i');
    console.log("req.body.simpleSearch:", req.body.simpleSearch);
    console.log("searchQuery:", searchRegex);

    const searchQuery = {
      $or: [
        { "ndaNumber": searchRegex },
        { "brandName": searchRegex },
        { "activeIngredient": searchRegex },
        { "dosageForm": searchRegex },
        { "route": searchRegex },
        { "strength": searchRegex },
        { "company": searchRegex },
        { "therapeuticClass": searchRegex },
        { "therapyArea": searchRegex },
        { "generisized": searchRegex },
        { "numberOfGenericsForFilers": searchRegex },
        { "numberOfGenericsForLaunch": searchRegex },
        { "submission": searchRegex },
        { "reviewPriority": searchRegex },
        { "sales": searchRegex },
        { "bcsClass": searchRegex },
        { "specificTechnology": searchRegex }
      ]
    };

    const searchResults = await UsOverviewModel.find(searchQuery);
    res.json({
      status: 200,
      message: "Search successful",
      result: searchResults,
    });
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
    const searchFields = req.body;
    const searchQuery = {};

    // Build the search query dynamically based on req.body
    Object.keys(searchFields).forEach(key => {
      searchQuery[key] = new RegExp(searchFields[key], 'i');
    });

    console.log("searchQuery:", searchQuery);

    const results = await UsOverviewModel.find(searchQuery);
    res.json({
      status: 200,
      message: "Search successful",
      data: results,
    });
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
    const searchRegex = new RegExp(req.body.simpleSearch, 'i');
    const searchQuery = {
      $or: [
        { "agencyProductNumber": searchRegex },
        { "brandName": searchRegex },
        { "activeIngredient": searchRegex },
        { "dosageForm": searchRegex },
        { "route": searchRegex },
        { "strength": searchRegex },
        { "company": searchRegex },
        { "therapeuticClass": searchRegex },
        { "therapyArea": searchRegex },
        { "generisized": searchRegex },
        { "numberOfGenerics": searchRegex },
        { "submission": searchRegex },
        { "reviewPriority": searchRegex },
        { "sales": searchRegex },
        { "bcsClass": searchRegex },
        { "specificTechnology": searchRegex }
      ]
    };

    const searchResults = await EpOverviewModel.find(searchQuery);
    res.json({
      status: 200,
      message: "Search successful",
      result: searchResults,
    });
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
    const searchFields = req.body;
    const searchQuery = {};

    Object.keys(searchFields).forEach(key => {
      searchQuery[key] = new RegExp(searchFields[key], 'i');
    });

    const results = await EpOverviewModel.find(searchQuery);
    res.json({
      status: 200,
      message: "Search successful",
      data: results,
    });
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
