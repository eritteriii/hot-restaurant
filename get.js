var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservation", function(req, res) {
  return res.json(reservation);
});
