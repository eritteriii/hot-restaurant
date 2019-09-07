var path = require("path");

// ROUTING

module.exports = function(app) {
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
  });
};
