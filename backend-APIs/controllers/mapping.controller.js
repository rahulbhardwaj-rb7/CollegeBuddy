import UserRegionMappingModel from "../models/user_region_mapping.js";


const userRegionMapping = async (req, res) => {
    try {
        const data = req.body;
        if (!Array.isArray(data)) {
            return res.status(400).json({ error: 'Invalid data format, expected an array' });
        }

        await UserRegionMappingModel.insertMany(data);
        res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};
const getUserRegion = async (req, res) => {
    try {
        const userID = req.params.userID;
        console.log("userID",userID);
        if (!userID) {
          return res.status(400).json({ error: 'User ID is required' });
        }
    
        const regions = await UserRegionMappingModel.find({ userID: userID }, 'region -_id');
        res.status(200).json({
          status: 200,
          data:regions.map(record => record.region)
        });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred', details: error.message });
      }
};


export { userRegionMapping, getUserRegion };
