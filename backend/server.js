const express = require("express");
const multer = require("multer")
const pdfParse = require("pdf-parse");
const RegisterRouter = require("./src/router/RegisterRouter");
const mongoUrl = 'mongodb+srv://safwanpm0:<password>@cluster0.dk6pqys.mongodb.net/PDF-DB?retryWrites=true&w=majority';
const dbName = 'pdfExtractorDB';
const PDFDocument = require('pdfkit');
const MongoClient = require('mongodb').MongoClient;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });






const app = express();
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))
app.use('/save', RegisterRouter)
MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;

    const db = client.db(dbName);

    // Additional MongoDB setup
    app.listen(4000, () => {
        console.log("server start at http://localhost:4000");
    });
});


// const express = require('express');
// const multer = require('multer');
// const pdfParse = require('pdf-parse');
// const PDFDocument = require('pdfkit');
// const MongoClient = require('mongodb').MongoClient;

// const app = express();
// const port = 4000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Multer setup for file upload
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // MongoDB setup
// const mongoUrl = 'mongodb+srv://safwanpm0:safwanpm0@cluster0.dk6pqys.mongodb.net/pdfExtractorDB?retryWrites=true&w=majority';
// const dbName = 'pdfExtractorDB';

// app.post('/upload', upload.single('pdfFile'), async (req, res) => {
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

// MongoClient.connect(mongoUrl, (err, client) => {
//     if (err) throw err;

//     // Additional MongoDB setup

//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });
// });

