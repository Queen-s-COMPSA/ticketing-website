const express = require("express");
const router = express.Router();
const { TicketingEvent, TicketingTicket } = require("#models"); // Update with the path to your Sequelize models

// Create New Ticket
router.post("/ticket", async (req, res) => {
  try {
    const event = await TicketingEvent.findByPk(req.body.eventId);
    if (!event || event.ticketsRemaining <= 0) {
      return res
        .status(400)
        .json({ message: "Event not available or tickets sold out" });
    }

    let ticket = await TicketingTicket.create({
      ...req.body,
      validated: false,
    });

    // Now that the ticket has an ID, generate the QR code
    const qrCode = await QRCode.toDataURL(ticket.id.toString()); // Generate QR code based on ticket ID

    ticket.qrCode = qrCode;
    await ticket.save();

    event.ticketsRemaining -= 1;
    await event.save();

    res.status(201).json(ticket);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating ticket", error: error.message });
  }
});

// Get Existing Ticket by email
router.get("/ticket", async (req, res) => {
  try {
    const tickets = await TicketingTicket.findAll({
      where: { email: req.query.email },
    });
    res.json(tickets);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tickets", error: error.message });
  }
});

// Validate Ticket
router.put("/ticket/:id/validate", async (req, res) => {
  try {
    const ticket = await TicketingTicket.findByPk(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    if (ticket.validated) {
      return res.status(400).json({ message: "Ticket already validated" });
    }

    ticket.validated = true;
    await ticket.save();

    res.json({
      message: "Ticket validated successfully",
      ticketOwner: ticket.name,
      ticketEmail: ticket.email,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error validating ticket", error: error.message });
  }
});

module.exports = router;
