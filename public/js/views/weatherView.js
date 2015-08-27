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
    $(".flash").append("<p class='weatherflash'>" + weatherSum + "</p>").fadeIn(2000);
  },

  weatherTemplate: function(weather){
    var html = $("<div class='weather-content'>");
    console.log(weather.latitude);
    var weatherIcon = this.weather.currently.icon // This is rain
    var weatherTemp = this.weather.currently.temperature
    console.log(weatherIcon);
    if (weatherIcon === "rain") {
      var wicon = "../../public/images/icon-rain.png"
    }
    if ( (weatherIcon === "cloudy") || (weatherIcon === "fog") ) {
      var wicon = "../../public/images/icon-cloudy.png"
    }
    if ( (weatherIcon === "sunny") || (weatherIcon === "clear-day") ) {
      var wicon = "../../public/images/icon-sunny.png"
    }
    if (weatherIcon === "clear-night") {
      var wicon = "../../public/images/icon-clear-night.png"
    }
    if (weatherIcon === "partly-cloudy-day") {
      var wicon = "../../public/images/icon-partly-cloudy.png"
    }
    else {
      var wicon = "../../public/images/icon-thunderstorms.png"
    }

    html.append("<img src='" + wicon + "\' class=\"icon\"/>").fadeIn(2000);
    html.append("<h3>" + weatherTemp + "°</h3>").fadeIn(2000);
    return(html);
  },
}; // END WeatherView.prototype
