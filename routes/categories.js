const express = require('express');
const router = express.Router();

const { getCategory, getCategories, addCategory, updateCategory, deleteCategory } = require("../controller/categories.js");

router.get("/", getCategories);
router.get("/:id", getCategory)
router.post("/", addCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

module.exports = router;