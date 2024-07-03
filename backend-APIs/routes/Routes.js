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
import { importExcelDataForUS } from "../utils/importExcel.js";
// const importExcelData = require('./utils/importExcel');
import path from 'path';


const InphamedRoute = express.Router();

// ------------------------------AUTH ROUTES-----------------------------------------------------

InphamedRoute.post("/auth/signup", register);
InphamedRoute.post("/auth/login", validateLogin, login);
InphamedRoute.post("/auth/logout", logout);
InphamedRoute.post("/auth/forgot/password", generateOtp);
InphamedRoute.post("/auth/forgot/password/otpSubmit", submitOtp);
InphamedRoute.put("/auth/forgot/password/updatePassword", changePassword);

// Define the file path
const filePath = path.join(process.env.basedir || __dirname, './data/US_Template.xlsx');

// Async route handler for importing Excel data
InphamedRoute.put('/excelDataForUS', async (req, res) => {
  try {
    await importExcelDataForUS(filePath);
    res.status(200).send('Excel data imported successfully for US');
  } catch (error) {
    console.error('Error importing Excel data:', error);
    res.status(500).send('Failed to import Excel data');
  }
});
export default InphamedRoute;
