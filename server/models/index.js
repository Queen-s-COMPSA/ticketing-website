"use strict";

// Import required packages and configurations
const path = require("path");
const fs = require("fs");
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

// Initialize Sequelize instance with configuration
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
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
  // Populate Admin example accounts
  .then(async () => {
    console.log(await require("./util/populateAdmins")(models));
  })
  // Catch population errors
  .catch((err) => {
    console.error("Error when connecting Sequelize to Database: ", err);
  });

// Export the models and connection
module.exports = models;
