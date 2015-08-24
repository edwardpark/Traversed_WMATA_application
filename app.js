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

var configuration = require("./config/keys.json");
var wmta_key = configuration.wmta.api_key;

app.listen("3000", function(){
  console.log("big Burrito is SAUCY!")
});

/////////////////////NextBus API call///////////////////////
var stopId = 1001195;
var apiKey = wmta_key;

var options = {
  url: 'https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=' + stopId + '&api_key='+ apiKey,
};
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);  //converts string to JSON format
    stopAddress = data.StopName;
    predictions = data.Predictions; //array of objects
  }
}

request(options, callback);
///////////////////////////////////////////////////////////
