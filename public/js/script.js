// it's not ideal that much of the functionality of your app is handled in this
// script file. it's really hard to read, and not mainanable!
// a lot of this should probably go into either a `searchView` or as part of the
// busStopsView

// additionally, you make three requests from your front-end to your backend, one
// of which transfers a lot of data to the client and then has the client sort
// through it (both VERY slow).

// instead, I'd suggest making 1 ajax request to the backend, and that should
// return an object with something like below (it's just an approximate, the
// actual data probably looks a bit different)
// the key is that one request should return info about the stop, busses, and the
// weather!

// {
//   busStop: {
//     id: 3,
//     lat: 123,
//     long: 123
//   },
//   buses: [
//     {
//       route: "Q1",
//       time: "2 minutes"
//     },
//     ...
//   ],
//   weather: {
//     temperature: 92,
//     conditions: "cloudy"
//   }
// }

var returnLatitude;
var returnLongitude;

$(document).on('click', "#menubuttonsvg", function() {
    $('.mobileNavWrapper').toggleClass('showNav')
});

$(document).on('click', "#backsvg", function() {
  $('.mobileNavWrapper').removeClass('showNav')
});

////////////////Rendering bussesView based on the stop entered//////////////////
$(document).on('click', "#submit", function(event){
    event.preventDefault();
    // .empty() is better if you want to clear the contents of an element
    $(".buses").html("");
    var stopId = $("#bus-search").val()

    // pro-tip! you can leave out the hostname and the browser will default
    // to include the current site you're on! this way you don't have to
    // update this line if you url changes:
    var url = "/busstop/" + stopId; // this should work just the same!
    var url = "https://ancient-peak-2424.herokuapp.com/busstop/" + stopId;

    // this feels like it should be in your model!
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
////////////////////////////////////////////////////////////////////////////////
   // THIS IS FOR MATCHING USER VAL TO DATABASE VAL

   // this code is confusing, why can'te you just return lat/long in the previous
   // ajax request? this way you don't have to make two requests to get info
   // about the bus stop?
    var request = "https://ancient-peak-2424.herokuapp.com/busstops/";
    $.ajax({
      url: request,
      type: "GET",
      dataType: "json"
    })
    .done(function(response) {
      console.log(response.length);
      for (var index = 0; index < response.length; index++) {
        if (response[index].StopID === stopId) {
          console.log("The entry matches ")
          returnLatitude = response[index].Lat;
          returnLongitude = response[index].Lon;
          break
        }
      }//end of inner for loop
      return {
        returnLatitude:returnLatitude,
        returnLongitude:returnLongitude
      };
    })

    .then(function(latlon){
          var urlWeather = "https://ancient-peak-2424.herokuapp.com/weather/" + returnLatitude + '/' + returnLongitude;

          $.ajax({
            url: urlWeather,
            type: "GET",
            dataType: "json"
          })
          .done(function(response){
            latitude = response.latitude;

            console.log(response);
            console.log("latlon:"+latlon)

            weather = new WeatherView(response)
            weather.render()//renders each bus number and arrival time.
            weather.renderFlash()

          })
          .fail(function(){ //closes ajax done function
            console.log("Oh noooo! It failed!");
          })


      }) //END OF .FAIL AND END OF AJAX CALL

    .fail(function(response){
        console.log("js failed to load");
      });

    $(".weather").html("");
});//closes document.ready
