// Navigation with jQuery

$(document).on('click', "#menubuttonsvg", function() {
    $('.mobileNavWrapper').toggleClass('showNav')
    console.log("click is working")
});

$(document).on('click', "#backsvg", function() {
  $('.mobileNavWrapper').removeClass('showNav')
  console.log("close click is working")
});

$(document).on('click', "#submit", function(event){
  console.log("search is working")
    event.preventDefault();
    $(".buses").html("");
    var stopId = $("#bus-search").val()
    var url = "https://ancient-peak-2424.herokuapp.com/busstop/" + stopId;
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      stopName = response.StopName; // From API
      predictions = response.Predictions; // From API
      //for loop goes through all the busses coming to the chosen stop for the next hour
      for(var i=0; i<predictions.length; i++){
        bus = new BusView(predictions[i])
        bus.render()//renders each bus number and arrival time.
      }
    }).fail(function(){ //closes ajax done function
      console.log("Oh noooo! It failed!");
    })



    $(".weather").html("");
    var urlWeather = "https://ancient-peak-2424.herokuapp.com/weather/";
    $.ajax({
      url: urlWeather,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log("script.js response latitude: " + response.latitude)

      console.log("stored stop id = " + stopId)

      latitude = response.latitude;

      weather = new WeatherView(response)
      weather.render()//renders each bus number and arrival time.

    }).fail(function(){ //closes ajax done function
      console.log("Oh noooo! It failed!");
    })

    // THIS IS FOR MATCHING USER VAL TO DATABASE VAL
    var request = "http://localhost:3000/busstops/";
    $.ajax({
      url: request,
      type: "GET",
      dataType: "json"
    }).done(function(response) {
      console.log("response is working");

      var busStops = [];
      for(var i = 0; i < response.length; i++){
        busStops.push(new BusStop(response[i]));
        var responseArray = response[i].StopID;
        console.log(responseArray)

        var entry;
        for (var index = 0; index < responseArray.length; ++index) {
            if (responseArray === stopId) {
              console.log("Response index: " + responseArray)
              console.log("stop Id is: " + stopId)
              console.log("The entry matches: ")
            }
            else {
              console.log("Not working")
            }
        }

      }


      })
    .fail(function(response){
        console.log("js failed to load");
      });
    return request;

});//closes document.ready
