var Bus = function(info){
  this.lat = info.Lat;
  this.lon = info.Lon;
  this.name = info.Name;
  this.routes = info.Routes;
  this.stopID = info.StopID;
  this.id = info.id;
}
Bus.fetch = function(id){
  // console.log("I'm here!");
  // console.log(id);
  // var request = $.getJSON("http://localhost:3000/busstop/"+id)
  // console.log(request)
  // .then(function(response){
  //   var busses = []
  //   for(var i=0; i<response.length; i++){
  //     busses.push(new Bus(response[i]))
  //   }
  //   return busses
  // })
  // .fail(function(response){
  //   console.log("js failed to load");
  // })
  // return request
}
