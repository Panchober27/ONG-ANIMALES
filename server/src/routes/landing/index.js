const express = require("express");
const router = express.Router();
const landingController = require("../../controllers/landing");

router.get("/landing-cards", landingController.getData);

module.exports = router;
