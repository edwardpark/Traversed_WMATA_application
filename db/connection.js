var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres:///bus_app_db");
var BusStop = sequelize.import("../models/busStop");

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    BusStop: BusStop
  }
}
