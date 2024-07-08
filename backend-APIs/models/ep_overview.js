import mongoose from "mongoose";

const { Schema } = mongoose;

const epOverviewSchema = new Schema(
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
        "dosageForm": {
            type: String,

        },
        "route": {
            type: String,

        },
        "strength": {
            type: String,

        },
        "company": {
            type: String,

        },
        "therapeuticClass": {
            type: String,

        },
        "therapyArea": {
            type: String,

        },
        "generisized": {
            type: String,

        },
        "numberOfGenerics": {
            type: String,

        },
        "submission": {
            type: String,

        },
        "reviewPriority": {
            type: String,

        },
        "sales": {
            type: String,

        },
        "bcsClass": {
            type: String,

        },
        "specificTechnology": {
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

const EpOverviewModel = mongoose.model("ep_overviews", epOverviewSchema);

export default EpOverviewModel;
