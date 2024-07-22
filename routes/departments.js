const express = require('express');
const router = express.Router();

const { getDepartments, getDepartment, addDepartment, updateDepartment, deleteDepartment } = require("../controller/departments.js");

router.get("/", getDepartments);
router.get("/:id", getDepartment)
router.post("/", addDepartment)
router.put("/:id", updateDepartment)
router.delete("/:id", deleteDepartment)

module.exports = router;