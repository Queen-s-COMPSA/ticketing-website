"use strict";
module.exports = (sequelize, DataTypes) => {
  const TicketingTicket = sequelize.define("TicketingTicket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "TicketingUser",
        key: "id",
      },
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: "TicketingEvent",
        key: "id",
      },
      allowNull: false,
    },
    qrCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  return TicketingTicket;
};
