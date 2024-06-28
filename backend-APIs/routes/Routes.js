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



const InphamedRoute = express.Router();

// ------------------------------AUTH ROUTES-----------------------------------------------------

InphamedRoute.post("/auth/signup", register);
InphamedRoute.post("/auth/login", validateLogin, login);
InphamedRoute.post("/auth/logout", logout);
InphamedRoute.post("/auth/forgot/password", generateOtp);
InphamedRoute.post("/auth/forgot/password/otpSubmit", submitOtp);
InphamedRoute.put("/auth/forgot/password/updatePassword", changePassword);



export default InphamedRoute;
