const express = require('express');
const router = express.Router();

const { getStatus, getStatuses, createStatus, updateStatus, deleteStatus } = require("../controller/status.js");

router.get("/", getStatuses);
router.get("/:id", getStatus)
router.post("/", createStatus)
router.put("/:id", updateStatus)
router.delete("/:id", deleteStatus)

module.exports = router;