import mongoose from "mongoose";

const { Schema } = mongoose;

const epRegulatorySchema = new Schema(
    {
        "agencyProductNumber": {
            type: String,
           
        },
        "dateOfApproval": {
            type: String,
           
        },
        "blaNumber": {
            type: String,
           
        },
        "markettingStatus": {
            type: String,
           
        },
        "latestIndication": {
            type: String,
           
        },
        "markettingExclusivity": {
            type: String,
           
        },
        "orphanDesignated": {
            type: String,
           
        },
        "pediatricExclusivity": {
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

const EpRegulatoryModel = mongoose.model("ep_regulatory", epRegulatorySchema);

export default EpRegulatoryModel;
