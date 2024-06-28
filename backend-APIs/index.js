import express from 'express';
import dotenv from 'dotenv';
import connection from './config/connectiondb.js';
import InphamedRoute from './routes/Routes.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
const corsOptions = {
    origin: true,
    credentials: true,
};


app.use(cors(corsOptions));
app.use(cookieParser())


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/inphamed/api/v1', InphamedRoute)



app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500;
    const errmessage = obj.message || "something went wrong";
    return res.status(statusCode).json({
        success: [200, 201, 202].some(a => a === obj.status) ? true : false,
        status: statusCode,
        message: errmessage,
        data: obj.data

    });
});



app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to the database.");
    } catch (error) {
        console.log("Error connecting to the database:", error);
    }
    console.log("Server listening on port " + `http://localhost:${process.env.port}`);
});








