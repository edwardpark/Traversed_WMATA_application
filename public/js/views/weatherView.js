var WeatherView = function(weather){ //creates the bus view contructor
  this.weather = weather;
  this.$el = $("<div class='weather-new'></div>");
  console.log("response latitude in view: " + this.weather.latitude)
  console.log("min temp in view: " + this.weather.currently.icon)
  console.log("weather in view: " + this.weather)
}

WeatherView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object

    self.$el.html(self.weatherTemplate(self.weather)); //changes the inner html of the element to our template
    $(".weather").append(self.$el); //appends our view to the empty div
  },

  weatherTemplate: function(weather){
    var html = $("<div>");
    console.log(weather.latitude);
    var weatherIcon = this.weather.currently.icon // This is rain
    html.append("<h2>" + weatherIcon + "</h2>")

    if (weatherIcon === "partly-cloudy-day") {
      var wicon = "../../public/images/icon-partly-cloudy.png"
      console.log("correct weather")
    }
    if (weatherIcon === "rain") {
      var wicon = "../../public/images/icon-rain.png"
    }
    else {
      var wicon = "../../public/images/icon-thunderstorm.png"
      console.log("other weather")
    }


    html.append("<img src='" + wicon + "\' class=\"icon\"/>")

    return(html);
  }
}
