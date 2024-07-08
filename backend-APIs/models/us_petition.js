import mongoose from "mongoose";

const { Schema } = mongoose;

const usPetitionSchema = new Schema(
    {
        "title": {
            type: String,
           
        },
        "docketID": {
            type: String,
           
        },
        "filedBy": {
            type: String,
           
        },
        "status": {
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

const UsPetitionModel = mongoose.model("us_petitions", usPetitionSchema);

export default UsPetitionModel;
