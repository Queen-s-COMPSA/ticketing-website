"use strict";
module.exports = (sequelize, DataTypes) => {
  const TicketingTicket = sequelize.define("TicketingTicket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
      unique: true,
    },
    validated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return TicketingTicket;
};
