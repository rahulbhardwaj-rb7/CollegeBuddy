import mongoose from "mongoose";

const { Schema } = mongoose;

const epProbabilitySchema = new Schema(
    {
        "agencyProductNumber": {
            type: String,
           
        },
        "brandName":{
            type: String,
           
        },
        "activeIngredient": {
            type: String,
           
        },
        "launchProbability":{
            type: Number,
           
        },
        "launchPerceptions": {
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

const EpProbabilityModel = mongoose.model("ep_probabilities", epProbabilitySchema);

export default EpProbabilityModel;
