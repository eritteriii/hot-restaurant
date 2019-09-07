var reservation = require("./reservation");
var waitlist = require("./waitlist");

// ROUTING

module.exports = function(app) {
  app.get("/api/reservation", function(req, res) {
    res.json(reservation);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
  });

  app.post("/api/tables", function(req, res) {
    if (reservation.length < 5) {
      reservation.push(req.body);
      res.json(true);
    } else {
      waitlist.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function() {
    reservation = [];
    waitlist = [];

    console.log(reservation);
  });
};
