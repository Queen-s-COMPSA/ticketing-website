const express = require("express");
const router = express.Router();
const { TicketingEvent, TicketingTicket } = require("#models"); // Update with the path to your Sequelize models

// ROUTES BELOW
router.use("/events", require("./events"));
router.use("/tickets", require("./tickets"));

module.exports = router;
