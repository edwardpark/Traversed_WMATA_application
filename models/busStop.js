module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("busstop", {
    Lat: Sequelize.FLOAT,
    Lon: Sequelize.FLOAT,
    Name: Sequelize.STRING,
    Routes: Sequelize.ARRAY(Sequelize.TEXT),
    StopID: Sequelize.STRING
  })
  return model;
};
