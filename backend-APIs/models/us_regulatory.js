import mongoose from "mongoose";

const { Schema } = mongoose;

const usRegulatorySchema = new Schema(
    {
        "ndaNumber": {
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
        "approvedIndication": {
            type: String,

        },
        "approvedIndicationLink": {
            type: String,

        },
        "latestIndication": {
            type: String,

        },
        "latestIndicationLink": {
            type: String,

        },
        "nceExclusivity": {
            type: String,

        },
        "gainExclusivity": {
            type: String,

        },
        "orphanExclusivity": {
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

const UsRegulatoryModel = mongoose.model("us_regulatory", usRegulatorySchema);

export default UsRegulatoryModel;
