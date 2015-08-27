var Sequelize = require("sequelize");

if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize("postgres:///bus_app_db");
}
var BusStop = sequelize.import("../models/busStop");

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    BusStop: BusStop
  }
}
