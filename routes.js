var reservation = require("./reservation");
// var waitListData = require("../waitinglistData");

// ROUTING

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    res.json(reservation);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(reservation);
  });

  app.post("/api/tables", function(req, res) {
    if (reservation.length < 5) {
      reservation.push(req.body);
      res.json(true);
    } else {
      reservation.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function() {
    reservation = [];
    reservation = [];

    console.log(reservation);
  });
};
