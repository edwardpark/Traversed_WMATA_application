module.exports = function(sequelize, Sequelize){ // module.exports allows our model to be available in other files.
  var model = sequelize.define("busstop", {
    StopID: Sequelize.STRING,
    Lat: Sequelize.FLOAT,
    Lon: Sequelize.FLOAT,
    Name: Sequelize.STRING,
    Zone: Sequelize.FLOAT
  })
  return model;
};
