import mongoose from "mongoose";

const { Schema } = mongoose;

const UserOtpSchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        otp_value: {
            type: String,
            required: true,
        },
        usage_status: {
            type: String,
            required: true,
        },
        isValid: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const UserOtpModel = mongoose.model("userotps", UserOtpSchema);

export default UserOtpModel;
