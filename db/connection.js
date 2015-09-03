var Sequelize = require("sequelize");


// we never covered this, but since you're using an env.js-type approach
// you can remove this if statment, assuming you put a DATABASE_URL property
// into your env.js (or keys.js as you've called it)
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
