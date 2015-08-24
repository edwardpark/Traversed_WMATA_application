var BusStop = function(info){
  this.lat = info.Lat;
  this.lon = info.Lon;
  this.name = info.Name;
  this.routes = info.Routes;
  this.stopid = info.StopID;
  this.id = info.id;
};

BusStop.fetch = function(){
  var request = $.getJSON("http://localhost:3000/busstops")
  .then(function(response) {
    var busStops = [];
    for(var i = 0; i < response.length; i++){
      movies.push(new BusStop(response[i]));
    }
    return busStops;
    })
  .fail(function(response){
      console.log("js failed to load");
    });
  return request;
};
