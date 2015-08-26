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

///security configuration for api keys////
// var configuration = require("./config/keys.json");
// var wmta_key = configuration.wmta.api_key;
// var darkSky_key = configuration.darkSky.api_key;
//


app.listen("3000", function(){
  console.log("big Burrito is SAUCY!")
});

/////////////////////NextBus API call///////////////////////
console.log("FOOOOOOO");
var apiKey = process.env.apiKey;
var darkSkyApiKey = process.env.darkSkyApiKey;
var latitude = 38.898663;
var longitude = -77.036358;

console.log(process.env);

function options(id){
  return  {
  url: 'https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=' + id + '&api_key='+ apiKey
  }
};

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
  //query over database for sequelize inserting stop id
  //return lat * longitude
  //input into variables
  //rest of call is the same
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
      getBusInfo.rez = nodeResponse;
      getBusInfo.busAPIInfo = JSON.parse(body);
      getBusInfo.sendJSON();
    }
  });//end of request module
});//end of app.get("/busstop")
