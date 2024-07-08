import UsIPModel from "../models/us_ip.js";
import UsOverviewModel from "../models/us_overview.js";
import UsRegulatoryModel from "../models/us_regulatory.js";


const getUsOverview = async (req, res) => {
  try {
    const { ndaNumber } = req.query;
    const searchResults = await UsOverviewModel.find({ ndaNumber: ndaNumber });
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



export {getUsOverview,getUsRegulatory,getUsip};
