import UserModel from "../models/user.js";
import UserOtpModel from "../models/user_otp.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

// const register = async (req, res, next) => {
//   try {
//     const role = await RoleModel.findOne({ name: "user" });
//     if (!role) throw CreateError(500, "Role 'user' not found");

//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(req.body.password, salt);

//     const newUser = new UserModel({
//       // firstName: req.body.firstName,
//       // lastName: req.body.lastName,
//       username: req.body.username,
//       email: req.body.email,
//       password: hashPassword,
//       // contactNo: req.body.contactNo,
//       roles: [role._id],
//     });

//     await newUser.save();
//     const roles = [role.name];
//     const tokenPayload = {
//       id: newUser._id,
//       email: newUser.email,
//       roles: roles,
//     };
//     const token = Jwt.sign(tokenPayload, process.env.JWT_SECRET);
//     console.log("Generated access_token:", token);

//     // res.cookie("access_token", token, {
//     //   httpOnly: true,
//     //   secure: true,
//     //   sameSite: "none",
//     // });

//     res.json({
//       status: 200,
//       message: "Registeration successful",
//       data: {
//         id: newUser._id,
//         email: newUser.email,
//         roles: roles,
//         token: token,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// };

const register = async (req, res, next) => {
  try {
    // const role = await RoleModel.findOne({ name: "user" });
    // if (!role) {
    //   throw new Error("Role 'user' not found");
    // }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      contactNo: req.body.contactNo,
      // roles: [role._id],
    });

    await newUser.save();

    const tokenPayload = {
      id: newUser._id,
      email: newUser.email,
      // roles: [role.name],
    };

    const token = Jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: 201,
      message: "Registration successful",
      data: {
        id: newUser._id,
        email: newUser.email,
        // roles: [role.name],
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const roles = user.roles.map((role) => role.name);

    const tokenPayload = {
      id: user._id,
      email: user.email,
      roles: roles,
    };

    const token = Jwt.sign(tokenPayload, process.env.JWT_SECRET);
    console.log("Generated access_token:", token);
    // res.cookie("access_token", token, {
    //   httpOnly: true,
    //   sameSite: "lax",
    // });

    res.json({
      status: 200,
      message: "Login successful",
      data: {
        id: user._id,
        email: user.email,
        roles: roles,
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("access_token", { httpOnly: true, secure: true });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const generateOtp = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let genOtp = Math.floor(1000 + Math.random() * 9000);

    console.log("OTP:::", genOtp);
    console.log("user:::", user);
    const otp_generated = new UserOtpModel({
      userID: user._id,
      otp_value: genOtp,
      usage_status: 'unused',
      isValid: true,
    });
    console.log("otp_generated:::", otp_generated);
    await otp_generated.save();

    const genOtpID = await UserOtpModel.findOne({ userID: user._id, otp_value: genOtp }).lean()

    console.log("otp_generated._id:::", genOtpID._id);

    res.cookie("otp_id", genOtpID._id, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({
      status: 200,
      message: "OTP Sent",
      data:genOtpID._id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }

}
const submitOtp = async (req, res) => {
  try {
    const dbStartTime = Date.now();

    const genOTP = await UserOtpModel.findOne({ _id: req.body.otp_id });
    console.log("************", genOTP);
    if (!genOTP.isValid) {
      return res.status(404).json({ message: "OTP Expired Try Again" });
    }


    const verifyUser = await UserOtpModel.findOne({
      _id: req.body.otp_id,
      otp_value: req.body.otp,
      usage_status: 'unused',
      isValid: 1
    });

    if (verifyUser) {

      const updateResult = await UserOtpModel.updateOne(
        { _id: req.body.otp_id },
        {
          $set: {
            usage_status: 'used',
            isValid: false
          }
        }
      );
      if (updateResult.nModified === 0) {
        return res.status(404).json({ message: "OTP record not found or already updated" });
      }

      const dbEndTime = Date.now();
      const total = dbEndTime - dbStartTime;
      console.log(`Db Query | verifyOTP  |  DbQueryTime: ${total}`);

      return res.json({
        status: 201,
        message: "Successfully Submited the OTP.",
        data: verifyUser.userID
      });
    } else {
      return res.status(500).json({ message: "Failed to submit OTP." }); // Indicate OTP verification failure
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
const changePassword = async (req, res) => {
  try {
    const { userID, password } = req.body;

    const findUserName = await UserModel.findOne({ _id: userID });
    if (!findUserName) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("findUserName", findUserName);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    findUserName.password = hashPassword;
    const updatedUser = await findUserName.save();

    const isPasswordMatch = await bcrypt.compare(
      password,
      updatedUser.password
    );
    if (!isPasswordMatch) {
      return res.status(500).json({ message: "Failed to update password" });
    }

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error in forgotPass:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export { register, login, logout, generateOtp, submitOtp, changePassword };
