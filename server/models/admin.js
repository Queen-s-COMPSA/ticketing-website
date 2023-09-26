"use strict";
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const AdminVar = sequelize.define(
    "admin",
    {
      // Primary key
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // Email. Cannot have 2 of same email. Must follow email format
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
        allowNull: false,
        unique: true,
      },
      // Password cannot be null. Is turned into hash with hooks before database
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,

      hooks: {
        beforeCreate: async (admin) => {
          if (admin.password) {
            const salt = await bcrypt.genSaltSync(10);
            admin.password = bcrypt.hashSync(admin.password, salt);
          }
        },

        beforeUpdate: async (admin) => {
          if (admin.password) {
            const salt = await bcrypt.genSaltSync(10);
            admin.password = bcrypt.hashSync(admin.password, salt);
          }
        },
      },
    }
  );
  AdminVar.prototype.validPassword = async (password, hash) => {
    return bcrypt.compareSync(password, hash);
  };
  return AdminVar;
};
