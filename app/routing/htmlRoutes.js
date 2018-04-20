var path = require('path');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
      app.get("/home", function(req, res) {
        console.log('im home');
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });      
     app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });   
}