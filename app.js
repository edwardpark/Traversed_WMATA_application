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
var configuration = require("./config/keys.json");
var wmta_key = configuration.wmta.api_key;
var darkSky_key = configuration.darkSky.api_key;



app.listen("3000", function(){
  console.log("big Burrito is SAUCY!")
});

/////////////////////NextBus API call///////////////////////
var stopId = 1001195;
var apiKey = wmta_key;
var darkSkyApiKey = darkSky_key;
var latitude = 37.8267;
var longitude = -122.423;

var options = {
  url: 'https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=' + stopId + '&api_key='+ apiKey,
};
var weather = {
  url: 'https://api.forecast.io/forecast/' + darkSkyApiKey + '/' + latitude + ',' + longitude
};
///////////////////////////////////////////////////////////
//issue getting the function call to return the right data.
var getBusInfo = {
  busAPIInfo: "",
  rez: "",

  sendJSON: function(){
    this.rez.json(this.busAPIInfo)
  }

}

app.get("/busstop/123", function(req, nodeResponse){
  request(options,function (error, response, body) {
    if (!error && response.statusCode == 200) {
      getBusInfo.rez = nodeResponse;
      getBusInfo.busAPIInfo = JSON.parse(body);
      getBusInfo.sendJSON();
    }
  });//end of request module
});
 //make http call to weather API
 //insert values into object
 //return response object "bustopinfo" to client0side
//});//end of app.get"/busstop/123"
