// looks like this model isn't used at all!
var BusStop = function(info){
  this.lat = info.Lat;
  this.lon = info.Lon;
  this.name = info.Name;
  this.routes = info.Routes;
  this.stopID = info.StopID;
  this.id = info.id;
};

BusStop.fetch = function(){
  var request = $.getJSON("http://localhost:3000/busstops")
  .then(function(response) {
    var busStops = [];
    for(var i = 0; i < response.length; i++){
      busStops.push(new BusStop(response[i]));
    }
    return;
    console.log("view stop id is " + response[i].StopID)
    })
  .fail(function(response){
      console.log("js failed to load");
    });
  return request;
};
