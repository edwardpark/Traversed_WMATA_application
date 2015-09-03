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

    // any time you have a bunch of if statements, see if you can use the data
    // directly instead of if statements.
    // e.g. here, you can can replace all these statements with one line:
    var wicon = "../../public/images/icon-" + weatherIcon + ".png";
    // boom ;)
    // the one 'trick' would be you'd need to update your image names to match
    // the data coming from the API, but that's not hard, and is more
    // maintainable!

    if (weatherIcon === "rain") {
      var wicon = "../../public/images/icon-rain.png"
    }
    if (weatherIcon === "cloudy") {
      var wicon = "../../public/images/icon-cloudy.png"
    }
    if (weatherIcon === "fog") {
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
    if (weatherIcon === "partly-cloudy-night") {
      var wicon = "../../public/images/icon-clear-night.png"
    }
    if (weatherIcon === "partly-cloudy-day") {
      var wicon = "../../public/images/icon-partly-cloudy.png"
    }
    if (weatherIcon === "snow") {
      var wicon = "../../public/images/icon-snow.png"
    }
    if (weatherIcon === "sleet") {
      var wicon = "../../public/images/icon-hail.png"
    }

    // it's a little weird that you're fading these elements in, becuase at this
    // point in time, they're not yet on the DOM.
    // better to hide them here and fade them in in your `render` method.
    html.append("<img src='" + wicon + "\' class=\"icon\"/>").fadeIn(2000);
    html.append("<h3>" + weatherTemp + "°F</h3>").fadeIn(2000);
    return(html);
  },
}; // END WeatherView.prototype
