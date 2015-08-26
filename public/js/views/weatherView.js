var WeatherView = function(weather){ //creates the weather view contructor
  this.weather = weather;
  this.$el = $("<div class='weather'></div>");
  console.log("response latitude in view: " + this.weather.latitude)
  console.log("min temp in view: " + this.weather.currently.icon)
  console.log("weather in view: " + this.weather)
}

WeatherView.prototype = {
  render: function(){ //renders the view on the screen
    var self = this; //binds this to the context of the object

    self.$el.html(self.weatherTemplate(self.weather)); //changes the inner html of the element to our template
    $(".logo").append(self.$el); //appends our view to the empty div
  },

  weatherTemplate: function(weather){
    var html = $("<p>");
    console.log(weather.latitude);
    var weatherIcon = this.weather.currently.icon // This is rain

    if (weatherIcon === "partly-cloudy-day") {
      var wicon = "../../public/images/icon-partly-cloudy.png"
      console.log("correct weather")
    }
    if (weatherIcon === "rain") {
      var wicon = "../../public/images/icon-rain.png"
    }
    else {
      var wicon = "../../public/images/icon-thunderstorms.png"
      console.log("other weather")
    }


    html.append("<img src='" + wicon + "\' class=\"icon\"/>")

    return(html);
  }
}
