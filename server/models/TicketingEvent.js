"use strict";
module.exports = (sequelize, DataTypes) => {
  const TicketingEvent = sequelize.define("TicketingEvent", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    totalTickets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    ticketsRemaining: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    imageURL: {
      type: DataTypes.STRING,
    },
  });
  return TicketingEvent;
};
