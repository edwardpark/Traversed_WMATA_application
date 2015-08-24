var DB = require("./connection");

DB.do.sync({force: true}).then(function(){
  process.exit();
});
