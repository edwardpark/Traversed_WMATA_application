var express = require("express");
var router = express.Router();
var BusStop = require("../db/connection").models.BusStop; // Because we gave access in our model and require it here, our busStop model is available

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/busstops", function(req, res){
  BusStop.findAll().then(function(busStops){
    res.json(busStops);
  });
});

module.exports = router;
