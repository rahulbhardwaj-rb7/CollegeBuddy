import mongoose from "mongoose";

const { Schema } = mongoose;

const usCaseDetailsSchema = new Schema(
    {
        "caseNumber": {
            type: String,
           
        },
        "dateOfProceedings": {
            type: String,
           
        },
        "filingNumber": {
            type: String,
        },
        "proceedingsInCourt": {
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

const UsCaseDetailsModel = mongoose.model("us_case_details", usCaseDetailsSchema);

export default UsCaseDetailsModel;
