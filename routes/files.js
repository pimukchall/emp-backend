const express = require('express');
const router = express.Router();

const { getFiles, uploadFile, updateUserFile, updateProductFile } = require("../controller/files.js");

router.get("/", getFiles);
router.post("/upload", uploadFile);
router.put("/user", updateUserFile);
router.put("/product", updateProductFile);

module.exports = router;