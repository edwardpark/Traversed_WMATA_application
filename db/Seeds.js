var DB = require("./connection");
var Seeds = {
  busStops: require ("./busStop_data")
}

DB.models.BusStop.bulkCreate(Seeds.busStops).done(function(){
  DB.models.BusStop.findAll().done(function(busStops){
    var b, busStop, output = [];
    for(b = 0; b < busStops.length; b++){
      busStop = busStops[b];
    }
    DB.models.BusStop.bulkCreate(output).done(function(){
      process.exit();
    })
  });
});
