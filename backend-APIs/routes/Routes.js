import express from "express";
import {
  changePassword,
  generateOtp,
  login,
  logout,
  register,
  submitOtp,
} from "../controllers/auth.controller.js";
import { validateLogin } from "../utils/validation.js";
import { importExcelDataForUS, importExcelDataForEurope } from "../utils/importExcel.js";
import multer from 'multer';
import { getUserRegion, userRegionMapping } from "../controllers/mapping.controller.js";
import { getAdvanceSearchDataForEP, getAdvanceSearchDataForUS, getBasicSearchDataForEP, getBasicSearchDataForUS } from "../controllers/search.controller.js";
import { getUsAndaFilers, getUsCaseDetails, getUsLitigationSummary, getUsOverview, getUsPitition, getUsProbability, getUsRegulatory, getUsip } from "../controllers/usDrugInfo.controller.js";
import { getEpIp, getEpOverview, getEpProbability, getEpRegulatory, getEpSpc } from "../controllers/epDrugInfo.controller.js";


const InphamedRoute = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// ------------------------------AUTH ROUTES-----------------------------------------------------

InphamedRoute.post("/auth/signup", register);
InphamedRoute.post("/auth/login", validateLogin, login);
InphamedRoute.post("/auth/logout", logout);
InphamedRoute.post("/auth/forgot/password", generateOtp);
InphamedRoute.post("/auth/forgot/password/otpSubmit", submitOtp);
InphamedRoute.put("/auth/forgot/password/updatePassword", changePassword);

InphamedRoute.post("/master/addUserRegion", userRegionMapping);
InphamedRoute.get("/master/getUserRegion/:userID", getUserRegion);

// ----------------------------------US basic and advance search-----------------
InphamedRoute.post("/usBasicSearch", getBasicSearchDataForUS);

InphamedRoute.post("/usAdvanceSearch", getAdvanceSearchDataForUS);
// ------------------------------------------------------------------------------

// ----------------------------------EP basic and advance search-----------------
InphamedRoute.post("/epBasicSearch", getBasicSearchDataForEP);

InphamedRoute.post("/epAdvanceSearch", getAdvanceSearchDataForEP);
// ------------------------------------------------------------------------------

// ---------------------------------US Drug Info------------------------------
InphamedRoute.get("/getUsOverview", getUsOverview);
InphamedRoute.get("/getUsRegulatory", getUsRegulatory);
InphamedRoute.get("/getUsip", getUsip);
InphamedRoute.get("/getUsProbability", getUsProbability);
InphamedRoute.get("/getUsLitigationSummary", getUsLitigationSummary);
InphamedRoute.get("/getUsCaseDetails", getUsCaseDetails);
InphamedRoute.get("/getUsAndaFilers", getUsAndaFilers);
InphamedRoute.get("/getUsPitition", getUsPitition);
// ---------------------------------------------------------------------------

// ---------------------------------EP Drug Info------------------------------
InphamedRoute.get("/getEpOverview", getEpOverview);
InphamedRoute.get("/getEpRegulatory", getEpRegulatory);
InphamedRoute.get("/getEpIp", getEpIp);
InphamedRoute.get("/getEpProbability", getEpProbability);
InphamedRoute.get("/getEpSpc", getEpSpc);
// ---------------------------------------------------------------------------



InphamedRoute.put('/excelDataForUS', upload.single('file'), async (req, res) => {
  try {
    console.log(req.file);
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    await importExcelDataForUS(req.file.buffer);
    res.status(200).send('Excel data imported successfully for US');
  } catch (error) {
    console.error('Error importing Excel data:', error);
    res.status(500).send('Failed to import Excel data');
  }
});

InphamedRoute.put('/excelDataForEurope', upload.single('file'), async (req, res) => {
  try {
    console.log(req.file);
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    await importExcelDataForEurope(req.file.buffer);
    res.status(200).send('Excel data imported successfully for Europe');
  } catch (error) {
    console.error('Error importing Excel data:', error);
    res.status(500).send('Failed to import Excel data');
  }
});
export default InphamedRoute;
