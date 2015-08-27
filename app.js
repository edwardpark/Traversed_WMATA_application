var express = require('express');
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
var fs=require("fs");

if(fs.existsSync("./config/key.js")){
  var env = require("./config/key.js")

}
else {
  var env = process.env;
} //syncs enviroment api_keys to local of deployment

app.use(bodyParser.json())

app.use("/public", express.static(path.join(__dirname + "/public")));
app.set("view engine", "hbs");

var busStopsController = require("./controllers/busStops");

app.get("/", function(req, res){
  res.render("index", {})
});
app.get("/faq", function(req, res){
  res.render("faq", {})
});
app.get("/about", function(req, res){
  res.render("about", {})
});

app.use("/", busStopsController);

var request = require("request");

app.listen(process.env.PORT || 3000, function(){
  console.log("Listening on port 3000");
}); //process.env allows to either use localhost or deployed enviroment

//////////////////// API Call Keys///////////////////////
var apiKey = env.apiKey;
var darkSkyApiKey = env.darkSkyApiKey;
///////////////////////////////////////////////////////////
var latitude;
var longitude;

function options(id){
  return  {
  url: 'https://api.wmata.com/NextBusService.svc/json/jPredictions?StopID=' + id + '&api_key='+ apiKey
  }
};
// Based on Stop ID user value, find matching Stop ID in database
// With stored matched ID, return latitude
// With stored matched ID, return longitude
function weather(lat,lon){
  return  'https://api.forecast.io/forecast/' + darkSkyApiKey + '/' + latitude + ',' + longitude
}; //change weather(lat,lon) little bit later on because they will become problematic for future dev

var getBusInfo = {
  busAPIInfo: "",
  rez: "",
  sendJSON: function(){
    this.rez.json(this.busAPIInfo)
  }
}

app.get("/busstop/:id", function(req, nodeResponse){
  request(options(req.params.id),function (error, response, body) {
    if (!error && response.statusCode == 200) {
      getBusInfo.rez = nodeResponse; // nodeResponse will become the response
      getBusInfo.busAPIInfo = JSON.parse(body);
      getBusInfo.sendJSON();
    }
  });//end of request module//
});

var getWeatherInfo = {  //insert values into object
  weatherInfo:"",
  rez:"",
  sendJSON: function(){
    this.rez.json(this.weatherInfo);
  }
}

app.get("/weather/:lat/:lon",function(req,nodeResponse){
   latitude = req.params.lat;
   longitude = req.params.lon;
   var url  = weather(latitude,longitude)
  request(url,function(error,response,body){  //make http call to weather API
    console.log("StatusCode:!!!")
    console.log(response.statusCode);
    console.log("URL:!")
    console.log(url)
    if (!error && response.statusCode == 200){
      getWeatherInfo.rez = nodeResponse;
      getWeatherInfo.weatherInfo = JSON.parse(body);
      nodeResponse.send(getWeatherInfo.weatherInfo);  //return response object "getWeatherinfo" to client side
    }
  });
});//end of app.get("/weather”)
