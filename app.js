var express = require('express');
var app = express();

var request = require("request");

var configuration = require("./config/keys.json");
var wmta_key = configuration.wmta.api_key;

app.listen("3000", function(){
  console.log("big Burrito is SAUCY!")
});
var stopId = 1001195;
var apiKey = wmta_key;

var options = {
  url: 'https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=' + stopId + '&api_key='+ apiKey,
};
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log([body]);
  }
}

request(options, callback);
