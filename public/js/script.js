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
    var url = "http://localhost:3000/busstop/" + stopId;
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
    var urlWeather = "http://localhost:3000/weather/";
    $.ajax({
      url: urlWeather,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log("response latitude: " + response.latitude)
      latitude = response.latitude;

      weather = new WeatherView(response)
      weather.render()//renders each bus number and arrival time.

    }).fail(function(){ //closes ajax done function
      console.log("Oh noooo! It failed!");
    })

});//closes document.ready
