import mongoose from "mongoose";

const { Schema } = mongoose;

const usAndaFilersSchema = new Schema(
    {
        "numberOfANDAs": {
            type: Number,
           
        },
        "dateOfANDAsubmission": {
            type: String,
           
        },
        "strength": {
            type: String,
           
        },
        "dosageForm": {
            type: String,
           
        },
        "f2f": {
            type: String,
           
        },
        "monthsExpirationDate": {
            type: String,
           
        },
        "updatedOn": {
            type: String,
           
        },
        isValid: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const UsAndaFilersModel = mongoose.model("us_anda_filers", usAndaFilersSchema);

export default UsAndaFilersModel;
