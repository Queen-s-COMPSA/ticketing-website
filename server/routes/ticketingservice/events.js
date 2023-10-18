const express = require("express");
const router = express.Router();
const { TicketingEvent, TicketingTicket } = require("#models"); // Update with the path to your Sequelize models

// Create New Event
router.post("/", async (req, res) => {
  try {
    const event = await TicketingEvent.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating event", error: error.message });
  }
});

// Change Event Status
router.put("/:id/status", async (req, res) => {
  try {
    const event = await TicketingEvent.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    event.status = req.body.status;
    await event.save();
    res.json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating event status", error: error.message });
  }
});

// Delete Existing Event
router.delete("/:id", async (req, res) => {
  try {
    const event = await TicketingEvent.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    await event.destroy();
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting event", error: error.message });
  }
});

// Get All Events
router.get("/", async (req, res) => {
  console.log("GETTING ALL EVENTS");
  try {
    const events = await TicketingEvent.findAll();
    res.json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching events", error: error.message });
  }
});

// Get Specific Event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await TicketingEvent.findByPk(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching event", error: error.message });
  }
});

module.exports = router;
