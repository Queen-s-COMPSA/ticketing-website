const express = require("express");
const router = express.Router();
const path = require("path");

// API Routes
router.use("/api", require(path.join(__dirname, "api")));

module.exports = router;
