module.exports = function(sequelize, Sequelize){
  var model = sequelize.define("busStop", {
    Lat: Sequelize.INTEGER,
    Lon: Sequelize.INTEGER,
    Name: Sequelize.STRING,
    Routes: Sequelize.ARRAY,
    StopID: Sequelize.STRING
  })
  return model;
};
