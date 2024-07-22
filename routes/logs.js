const express = require('express');
const router = express.Router();

const { getLog, getLogs, addLog, updateLog, deleteLog } = require("../controller/logs.js");

router.get("/", getLogs);
router.get("/:id", getLog)
router.post("/", addLog)
router.put("/:id", updateLog)
router.delete("/:id", deleteLog)

module.exports = router;