// Assuming this code is part of your backend (e.g., routes/upload.route.js)

import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const date = new Date().toISOString().split('T')[0];
        const userId = req.user ? req.user._id.toString() : null;

        console.log(userId);

        if (userId) {
            const uploadDir = path.join(process.env.basedir, 'PdfUploads', date, userId);

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            cb(null, uploadDir);
        } else {
            cb(new Error('User ID is undefined'), null);
        }
    },
    filename: function (req, file, cb) {
        const timestamp = Date.now();
        cb(
            null,
            `${file.originalname}_${timestamp}${path.extname(file.originalname)}`
        );
    },
});

export const Pdfupload = multer({ storage: storage });

// Your route handler for handling PDF uploads

