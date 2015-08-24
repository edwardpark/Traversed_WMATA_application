var DB = require("./connection");
var Seeds = {
  busStops: require ("./busStop_data")
}

DB.models.BusStop.bulkCreate(Seeds.busStops)
  .then(function(){
    return DB.models.BusStop.findAll();
  }
  .then(function(){
    process.exit();
  });
