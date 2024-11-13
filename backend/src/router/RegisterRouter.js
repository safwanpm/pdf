// const express = require("express")
// const RegisterRouter = express.Router()
// const multer = require("multer")
// const upload = multer({ storage: storage });
// const storage = multer.memoryStorage();
// RegisterRouter.post('/upload', upload.single('pdfFile'), async (req, res) => {
//     try {
//         const buffer = req.file.buffer;
//         const pdfData = await pdfParse(buffer);

//         // Process pdfData and extract specific pages
//         // Create a new PDF with the selected pages

//         // Save the new PDF and other relevant data to MongoDB

//         res.status(200).json({ success: true, message: 'PDF processed successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// });

// module.exports = RegisterRouter