import mongoose from "mongoose";

const { Schema } = mongoose;

const epSpcSchema = new Schema(
    {
        "agencyProductNumber": {
            type: String,
           
        },
        "patent": {
            type: String,
           
        },
        "country": {
            type: String,
           
        },
        "status": {
            type: String,
           
        },
        "expiry": {
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

const EpSpcModel = mongoose.model("ep_spces", epSpcSchema);

export default EpSpcModel;
