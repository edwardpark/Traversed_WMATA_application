var express = require("express");
var router = express.Router();
var BusStop = require("../db/connection").models.BusStop; // Because we gave access in our model and require it here, our busStop model is available

function error(response, message){
  response.status(500);
  response.json({error: message})
}

// I know someone else mentioned this to you, but you probably don't need this
// route, as it's very network intensive to send all bus stops to the client
// best to use a 'show' route to find a bus stop by ID and return just that
router.get("/busstops", function(req, res){
  BusStop.findAll().then(function(busStops){
    res.json(busStops);
  });
});

module.exports = router;
