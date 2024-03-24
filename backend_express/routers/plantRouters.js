const express = require("express");
const { getPlantCondition } = require("../controllers/plantControllers");
const router = express.Router();

router.get("/plant",getPlantCondition)

module.exports = router
