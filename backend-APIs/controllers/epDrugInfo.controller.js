import EpIpModel from "../models/ep_ip.js";
import EpOverviewModel from "../models/ep_overview.js";
import EpProbabilityModel from "../models/ep_probability.js";
import EpRegulatoryModel from "../models/ep_regulatory.js";
import EpSpcModel from "../models/ep_spc.js";


const getEpOverview = async (req, res) => {
  try {
    const { agencyProductNumber } = req.query;
    const searchResults = await EpOverviewModel.find({ agencyProductNumber: agencyProductNumber });
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
