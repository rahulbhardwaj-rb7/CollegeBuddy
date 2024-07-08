import mongoose from "mongoose";

const { Schema } = mongoose;

const usIPSchema = new Schema(
    {
        "ndaNumber": {
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
        "dosageForm": {
            type: String,

        },
        "strength": {
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
        "obListed": {
            type: String,

        },
        "status": {
            type: String,

        },
        "pet": {
            type: String,

        },
        "ped": {
            type: String,

        },
        "terminalDisclaimer": {
            type: String,

        },
        "estimatedExpiry": {
            type: String,

        }
        ,
        "independentClaims": {
            type: String,

        },
        "proposedStrategyForPARA": {
            type: String,

        },
        isValid: {
            type: Boolean,
            default: true,
        },
    }
    ,
    {
        timestamps: true,
    }
);

const UsIPModel = mongoose.model("us_ips", usIPSchema);

export default UsIPModel;
