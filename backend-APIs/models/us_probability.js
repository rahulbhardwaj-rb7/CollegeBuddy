import mongoose from "mongoose";

const { Schema } = mongoose;

const usProbabilitySchema = new Schema(
    {
        "ndaNumber": {
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

const UsProbabilityModel = mongoose.model("us_probabilities", usProbabilitySchema);

export default UsProbabilityModel;
