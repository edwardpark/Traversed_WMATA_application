$(document).ready(function(){
  Bus.fetch().then(function(busses){
    busses.forEach(function(bus){
      var view = new BusView(bus)
      view.render();
    })
  })

  // BusStop.fetch().then(function(busStops){
  //   busStops.forEach(function(busStop){
  //     var view = new BusStopView(busStop)
  //     view.render();
  //   })
  //   })

});
