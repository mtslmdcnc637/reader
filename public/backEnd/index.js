const express = require("express")
const fileUpload = require("express-fileupload")
const pdfParse = require("pdf-parse")

const app = express();
app.use("../src/components/Upload.js", express.static("public"));
app.listen(3003);