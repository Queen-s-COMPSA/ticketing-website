"use strict";

// Import required packages and configurations
const path = require("path");
const fs = require("fs");
const { Sequelize } = require("sequelize");

// Initialize Sequelize instance with configuration
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    logging: false,
    define: { freezeTableName: true },
    host: process.env.MYSQL_HOST,
    dialect: process.env.DBDIALECT,
  }
);

// Object to store models for export
const models = {};

// Retrieve the current file's name
const basename = path.basename(__filename);

// Iterate through model files in directory and import them
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    models[model.name] = model;
  });

// Add Sequelize instance and constructor to the export
models.sequelize = sequelize;
models.Sequelize = Sequelize;

// ASSOCIATIONS GO HERE

// Users can have tickets assigned to their account
// USER HAS MANY TICKETS
// TICKET BELONGS TO A USERS
models.TicketingUser.hasMany(models.TicketingTicket, { foreignKey: "userId" });
models.TicketingTicket.belongsTo(models.TicketingUser, {
  foreignKey: "userId",
});

// Events have tickets associated with them and every ticket has an associated event
// EVENT HAS MANY TICKETS
// TICKET BELONGS TO AN EVENT
models.TicketingEvent.hasMany(models.TicketingTicket, {
  foreignKey: "eventId",
});

models.TicketingTicket.belongsTo(models.TicketingEvent, {
  foreignKey: "eventId",
});

// Initialize Sequelize, authenticate, sync models, and populate initial data
sequelize
  .authenticate()
  .then(() =>
    console.log("Sequelize has connected to the database successfully...")
  )
  .then(() => sequelize.sync({ alter: true }))
  .then(() =>
    console.log(
      "Sequelize has successfully synced models to database with alterations..."
    )
  )
  // Catch population errors
  .catch((err) => {
    console.error("Error when connecting Sequelize to Database: ", err);
  });

// Export the models and connection
module.exports = models;
