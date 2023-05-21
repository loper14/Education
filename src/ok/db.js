let mysql = require("mysql");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "loper",
  database: "newDataBase",
});

module.exports = pool;
