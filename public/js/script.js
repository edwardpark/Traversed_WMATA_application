$(document).ready(function(){
  $("#search").on("submit", function(event){
    event.preventDefault();
    $(".buses").html(""); //clears the screen
    var stopId = $("#bus-search").val()
    var url = "http://localhost:3000/busstop/" + stopId;
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      stopName = response.StopName;
      predictions = response.Predictions;
      var array = sortBusRoutes(predictions);
      var uniqueArray = unique(array);
      //render bus route view
      //for loop goes through all the busses coming to the chosen stop for the next hour
      for(var j=0; j<uniqueArray.length; j++){
        route = new RouteView(uniqueArray[j])
        route.render()
      }
        $("h2").on("click", function(event){
          event.preventDefault();
          $(event.target).toggleClass("show")
          for(var i=0; i<predictions.length; i++){
            if($(event.target).html() == predictions[i].RouteID){
              console.log(i);
              bus = new BusView(predictions[i])
              bus.render()//renders each bus number and arrival time.
            }
            else {
              console.log("I'm else");
            }
          }
        })
    }).fail(function(){ //closes ajax done function
      console.log("Oh noooo! It failed!");
    })
  })//closes event handler


});//closes document.ready
