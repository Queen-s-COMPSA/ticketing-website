const express = require("express");
const router = express.Router();
const path = require("path");

// API Routes
router.get("/test", (req, res) => res.send("working"));

router.use(
  "/ticketingservice",
  require(path.join(__dirname, "ticketingservice"))
);

module.exports = router;
