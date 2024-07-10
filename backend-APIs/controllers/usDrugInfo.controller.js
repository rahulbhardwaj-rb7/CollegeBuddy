import UsAndaFilersModel from "../models/us_anda_filers.js";
import UsCaseDetailsModel from "../models/us_case_details.js";
import UsIPModel from "../models/us_ip.js";
import usLitigationSummaryModel from "../models/us_litigation_summary.js";
import UsOverviewModel from "../models/us_overview.js";
import UsPetitionModel from "../models/us_petition.js";
import UsProbabilityModel from "../models/us_probability.js";
import UsRegulatoryModel from "../models/us_regulatory.js";


const getUsOverview = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const overviewResults = await UsOverviewModel.find({ ndaNumber: ndaNumber });
    const searchResults = overviewResults.map(result => {
      const strengthGroups = result.strength.split('|').map(s => s.trim().split(/,|&/).map(st => st.trim()));
      const routeGroups = result.route.split('|').map(r => r.trim());
      const dosageFormGroups = result.dosageForm.split('|').map(df => df.trim());
      let dosageDetail = [];
      for (let i = 0; i < dosageFormGroups.length; i++) {
        const dosageForm = dosageFormGroups[i];
        const route = routeGroups[i];
        const strengths = strengthGroups[i];
        strengths.forEach(strength => {
          dosageDetail.push({
            dosageForm: dosageForm,
            route: route,
            strength: strength
          });
        });
      }
      return {
        ...result._doc,
        dosageDetail
      };
    });
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
const getUsRegulatory = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await UsRegulatoryModel.find({ ndaNumber: ndaNumber });
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
const getUsip = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await UsIPModel.find({ ndaNumber: ndaNumber });
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
const getUsProbability = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await UsProbabilityModel.find({ ndaNumber: ndaNumber });
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
const getUsLitigationSummary = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await usLitigationSummaryModel.find({ ndaNumber: ndaNumber });
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
const getUsCaseDetails = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await UsCaseDetailsModel.find({ ndaNumber: ndaNumber });
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
const getUsAndaFilers = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await UsAndaFilersModel.find({ ndaNumber: ndaNumber });
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
const getUsPitition = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    if (!ndaNumber) {
      return res.status(400).json({
        status: 400,
        message: "NDA number is required.",
      });
    }
    const searchResults = await UsPetitionModel.find({ ndaNumber: ndaNumber });
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



export { getUsOverview, getUsRegulatory, getUsip, getUsProbability, getUsLitigationSummary, getUsCaseDetails, getUsAndaFilers, getUsPitition };
