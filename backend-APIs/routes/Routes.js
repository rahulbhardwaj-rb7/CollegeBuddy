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
import { getAdvanceSearchDataForUS, getBasicSearchDataForUS } from "../controllers/search.controller.js";


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
InphamedRoute.post("/epBasicSearch", getBasicSearchDataForUS);
InphamedRoute.post("/epAdvanceSearch", getAdvanceSearchDataForUS);
// ------------------------------------------------------------------------------




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
