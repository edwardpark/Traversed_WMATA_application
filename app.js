var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use("/public", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

var busStopsController = require("./controllers/busStops");

app.get("/", function(req, res){
  res.render("index", {})
});

app.use("/", busStopsController);

var request = require("request");

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
});

//////////////////// API Call Keys///////////////////////
var apiKey = process.env.apiKey;
var darkSkyApiKey = process.env.darkSkyApiKey;
var latitude = 38.898663;
var longitude = -77.036358;

function options(id){
  return  {
  url: 'https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=' + id + '&api_key='+ apiKey
  }
};

// Based on Stop ID user value, find matching Stop ID in database
// With stored matched ID, return latitude
// With stored matched ID, return longitude

var weather = {
  url: 'https://api.forecast.io/forecast/' + darkSkyApiKey + '/' + latitude + ',' + longitude
};
///////////////////////////////////////////////////////////
var getBusInfo = {
  busAPIInfo: "",
  rez: "",
  sendJSON: function(){
    this.rez.json(this.busAPIInfo)
  }
}

var getWeatherInfo = {
  weatherInfo:"",
  rez:"",
  sendJSON: function(){
    this.rez.json(this.weatherInfo);
  }
}
app.get("/weather",function(req,nodeResponse){

  request(weather,function(error,response,body){
    if (!error && response.statusCode == 200){
      getWeatherInfo.rez = nodeResponse;
      getWeatherInfo.weatherInfo = JSON.parse(body);
      getWeatherInfo.sendJSON();
    }
  });
});//end of app.get("/weather")

app.get("/busstop/:id", function(req, nodeResponse){
  request(options(req.params.id),function (error, response, body) {
    if (!error && response.statusCode == 200) {
      getBusInfo.rez = nodeResponse; // nodeResponse will become the response
      getBusInfo.busAPIInfo = JSON.parse(body);
      getBusInfo.sendJSON();
      console.log("app.js stored stop id =" + getBusInfo.id)
    }
  });//end of request module
});

var getWeatherInfo = {  //insert values into object
  weatherInfo:"",
  rez:"",
  sendJSON: function(){
    this.rez.json(this.weatherInfo);
  }
}

app.get("/weather",function(req,nodeResponse){
  request(weather,function(error,response,body){  //make http call to weather API
    if (!error && response.statusCode == 200){
      getWeatherInfo.rez = nodeResponse;
      getWeatherInfo.weatherInfo = JSON.parse(body);
      getWeatherInfo.sendJSON();  //return response object "getWeatherinfo" to client side
    }
  });
});//end of app.get("/weather”)
