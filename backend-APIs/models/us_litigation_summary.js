import mongoose from "mongoose";

const { Schema } = mongoose;

const usLitigationSummarySchema = new Schema(
    {
        "ndaNumber": {
            type: String,
           
        },
        "caseNumber": {
            type: String,
           
        },
        "filingDate": {
            type: String,
           
        },
        "courtJurisdiction": {
            type: String,
           
        },
        "plaintiffsDefendants": {
            type: String,
           
        },
        "natureOfSuit": {
            type: String,
           
        },
        "decision": {
            type: String,
           
        },
        "status": {
            type: String,
           
        },
        "petitionNumbers": {
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

const usLitigationSummaryModel = mongoose.model("us_litigation_summaries", usLitigationSummarySchema);

export default usLitigationSummaryModel;
