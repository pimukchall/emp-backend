const express = require('express');
const router = express.Router();

const { getRole, getRoles, createRole, updateRole, deleteRole } = require("../controller/roles.js");

router.get("/", getRoles);
router.get("/:id", getRole)
router.post("/", createRole)
router.put("/:id", updateRole)
router.delete("/:id", deleteRole)

module.exports = router;