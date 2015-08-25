$(document).ready(function(){
  $("#search").on("submit", function(event){
    console.log("you submitted");
    event.preventDefault();
    var stopId = $("#bus-search").val()
    // var url = "http://localhost:3000/busstop/" + stopId;
    // $.ajax({
    //   url: url,
    //   type: "GET",
    //   dataType: "json"
    // }).done(function(response){
      // console.log(response);
      Bus.fetch(stopId).then(function(busses){
        busses.forEach(function(bus){
          var view = new BusView(bus)
          view.render();
        })
      })
    // }).fail(function(){ //closes ajax done function
    //   console.log("Oh noooo! It failed!");
    // })
  })//closes event handler

  // BusStop.fetch().then(function(busStops){
  //   busStops.forEach(function(busStop){
  //     var view = new BusStopView(busStop)
  //     view.render();
  //   })
  //   })

});
