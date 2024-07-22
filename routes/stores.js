const express  = require('express');
const router = express.Router();

const { getStore, getStores, createStore, updateStore, deleteStore } = require("../controller/stores.js");

router.get("/", getStores);
router.get("/:id", getStore)
router.post("/", createStore)
router.put("/:id", updateStore)
router.delete("/:id", deleteStore)

module.exports = router;