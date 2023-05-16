let express = require("express");
let mysql = require("mysql");
let cors = require("cors");

let app = express();
app.use(cors());

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loper",
  database: "newDataBase",
});

app.get("/", (req, res) => {
  return res.json("Hello from 1 backend!");
});

app.get("/users", (req, res) => {
  let sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.listen("8081", () => {
  console.log("listening...");
});
