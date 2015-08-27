var WeatherView = function(weather){ //creates the weather view contructor
  this.weather = weather;
  this.$el = $("<div class='weather'></div>");
}

WeatherView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object
    self.$el.html(self.weatherTemplate(self.weather)); //changes the inner html of the element to our template
    $(".header").append(self.$el); //appends our view to the empty div
  },

  renderFlash: function(){
    var self= this;
    var weatherSum = this.weather.hourly.summary
    $(".flash").html("")//make sure the div is empty before appending
    $(".flash").append("<p class='weatherflash'>" + weatherSum + "</p>");
  },

  weatherTemplate: function(weather){
    var html = $("<div class='weather-content'>");
    console.log(weather.latitude);
    var weatherIcon = this.weather.currently.icon
    var weatherTemp = parseInt(this.weather.currently.temperature)
    console.log("the weather icon is :" + weatherIcon);
    if (weatherIcon === "rain") {
      var wicon = "../../public/images/icon-rain.png"
    }
    if (weatherIcon === "cloudy") {
      var wicon = "../../public/images/icon-cloudy.png"
    }
    if (weatherIcon === "sunny") {
      var wicon = "../../public/images/icon-sunny.png"
    }
    if (weatherIcon === "clear-day") {
      var wicon = "../../public/images/icon-sunny.png"
    }
    if (weatherIcon === "clear-night") {
      var wicon = "../../public/images/icon-clear-night.png"
    }
    if (weatherIcon === "partly-cloudy-day") {
      var wicon = "../../public/images/icon-partly-cloudy.png"
    }

    html.append("<img src='" + wicon + "\' class=\"icon\"/>").fadeIn(2000);
    html.append("<h3>" + weatherTemp + "°F</h3>").fadeIn(2000);
    return(html);
  },
}; // END WeatherView.prototype
