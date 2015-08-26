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
      stopName = response.StopName;
      predictions = response.Predictions;
      //for loop goes through all the busses coming to the chosen stop for the next hour
      for(var i=0; i<predictions.length; i++){
        bus = new BusView(predictions[i])
        bus.render()//renders each bus number and arrival time.
      }
    }).fail(function(){ //closes ajax done function
      console.log("Oh noooo! It failed!");
    })

});//closes document.ready
