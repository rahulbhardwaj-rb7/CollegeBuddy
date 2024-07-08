import mongoose from "mongoose";

const { Schema } = mongoose;

const epIpSchema = new Schema(
    {
        "agencyProductNumber": {
            type: String,
           
        },
        "brandName": {
            type: String,
           
        },
        "activeIngredient": {
            type: String,
           
        },
        "typeOfPatent": {
            type: String,
           
        },
        "equivalentFamily": {
            type: String,
           
        },
        "patentNumber": {
            type: String,
           
        },
        "currentAssignee": {
            type: String,
           
        },
        "status": {
            type: String,
           
        },
        "spc": {
            type: String,
           
        },
        "ped": {
            type: String,
           
        },
        "estimatedExpiry": {
            type: String,
           
        },
        "ifGranted": {
            type: String,
           
        },
        "IndependentClaims": {
            type: String,
           
        },
        "proposedStrategyForPARA": {
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

const EpIpModel = mongoose.model("ep_ips", epIpSchema);

export default EpIpModel;
