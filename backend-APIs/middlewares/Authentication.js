import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken';

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies["access_token"]

        console.log("tok", token);


        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const userId = decoded.id;


        const user = await UserModel.findById(userId);


        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }


        req.user = user;


        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};



export const authorizeAdmin = async (req, res, next) => {
    try {
        const token = req.cookies["access_token"];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        console.log('User:', user);


        if (!user.isAdmin && !user.isSuperAdmin) {
            console.log('Access forbidden:', !user.isAdmin, !user.isSuperAdmin);
            return res.status(403).json({ error: 'Access forbidden. Only admins can access this resource.' });
        }


        req.user = user;
        next();
    } catch (error) {
        console.error('Authorization error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
