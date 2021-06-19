const express = require("express");
const router = express.Router();

/**
 * Toda la informacion necesaria para la LandingPage
 */

router.get("/", (req, res) => {
  const welcome = "Welcome to the ONG site";
  res.send(welcome);
});

module.exports = router;
