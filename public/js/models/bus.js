var Bus = function(info){
  this.lat = info.Lat;
  this.lon = info.Lon;
  this.name = info.Name;
  this.routes = info.Routes;
  this.stopID = info.StopID;
  this.id = info.id;
}

function sortBusRoutes(object){
  busRouteArray = [];
  for(var i=0; i<object.length; i++){
    currentRoute = object[i].RouteID
    busRouteArray.push(currentRoute)
  }
  return busRouteArray
}
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
