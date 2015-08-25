$(document).ready(function(){
  $("#search").on("submit", function(event){
    event.preventDefault();
    var stopId = $("#bus-search").val()
    var url = "http://localhost:3000/busstop/" + stopId;
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      stopName = response.StopName;
      predictions = response.Predictions;
      console.log(predictions);
      bus = new BusView(predictions[0])
      console.log(bus);
      bus.render()
      console.log(predictions);
    }).fail(function(){ //closes ajax done function
      console.log("Oh noooo! It failed!");
    })
  })//closes event handler

  // BusStop.fetch().then(function(busStops){
  //   busStops.forEach(function(busStop){
  //     var view = new BusStopView(busStop)
  //     view.render();
  //   })
  //   })

});
