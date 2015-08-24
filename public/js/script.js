$(document).ready(function(){
  BusStop.fetch().then(function(busStops){
    busStops.forEach(function(busStop){
      var view = new BusStopView(busStop)
      view.render();
    })
  })

});
