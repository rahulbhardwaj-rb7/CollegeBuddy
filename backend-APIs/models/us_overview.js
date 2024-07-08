import mongoose from "mongoose";

const { Schema } = mongoose;

const usOverviewSchema = new Schema(
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
        "numberOfGenericsForFilers": {
            type: String,
           
        },
        "numberOfGenericsForLaunch": {
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

const UsOverviewModel = mongoose.model("us_overviewes", usOverviewSchema);

export default UsOverviewModel;
