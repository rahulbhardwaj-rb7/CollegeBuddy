import mongoose from "mongoose";

const userRegionMappingSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
});

const UserRegionMappingModel = mongoose.model("user_region_mapping", userRegionMappingSchema);

export default UserRegionMappingModel;