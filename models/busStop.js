module.exports = function(sequelize, Sequelize){ // module.exports allows our model to be available in other files.
  var model = sequelize.define("busstop", {
    Lat: Sequelize.FLOAT,
    Lon: Sequelize.FLOAT,
    Name: Sequelize.STRING,
    Routes: Sequelize.ARRAY(Sequelize.TEXT),
    StopID: Sequelize.STRING
  })
  return model;
};
