import EpIpModel from "../models/ep_ip.js";
import EpOverviewModel from "../models/ep_overview.js";
import EpProbabilityModel from "../models/ep_probability.js";
import EpRegulatoryModel from "../models/ep_regulatory.js";
import EpSpcModel from "../models/ep_spc.js";


const getEpOverview = async (req, res) => {
  try {
    const { agencyProductNumber } = req.query;
    if (!agencyProductNumber) {
      return res.status(400).json({
        status: 400,
        message: "Agency product number is required.",
      });
    }
    const overviewResults = await EpOverviewModel.find({ agencyProductNumber: agencyProductNumber });

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
const getEpRegulatory = async (req, res) => {
  try {
    const { agencyProductNumber } = req.query;
    if (!agencyProductNumber) {
      return res.status(400).json({
        status: 400,
        message: "Agency product number is required.",
      });
    }
    const searchResults = await EpRegulatoryModel.find({ agencyProductNumber: agencyProductNumber });
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
const getEpIp = async (req, res) => {
  try {
    const { agencyProductNumber } = req.query;
    if (!agencyProductNumber) {
      return res.status(400).json({
        status: 400,
        message: "Agency product number is required.",
      });
    }
    const searchResults = await EpIpModel.find({ agencyProductNumber: agencyProductNumber });
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
const getEpProbability = async (req, res) => {
  try {
    const { agencyProductNumber } = req.query;
    if (!agencyProductNumber) {
      return res.status(400).json({
        status: 400,
        message: "Agency product number is required.",
      });
    }
    const searchResults = await EpProbabilityModel.find({ agencyProductNumber: agencyProductNumber });
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
const getEpSpc = async (req, res) => {
  try {
    const { agencyProductNumber } = req.query;
    if (!agencyProductNumber) {
      return res.status(400).json({
        status: 400,
        message: "Agency product number is required.",
      });
    }
    const searchResults = await EpSpcModel.find({ agencyProductNumber: agencyProductNumber });
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




export { getEpOverview, getEpRegulatory, getEpIp, getEpProbability, getEpSpc };
