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

    status: {
      type: DataTypes.ENUM,
      values: ["draft", "published", "passed", "cancelled"],
      allowNull: false,
      defaultValue: "draft",
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

    imageURL: {
      type: DataTypes.STRING,
    },
  });
  return TicketingEvent;
};
