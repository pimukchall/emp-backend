const express = require('express');
const router = express.Router();

const { getLocations, getLocation, addLocation, updateLocation, deleteLocation } = require("../controller/locations.js");

router.get("/", getLocations);
router.get("/:id", getLocation)
router.post("/", addLocation)
router.put("/:id", updateLocation)
router.delete("/:id", deleteLocation)

module.exports = router;