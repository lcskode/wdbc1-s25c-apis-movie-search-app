var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");



// ============================================================================
// ROUTES
// ============================================================================

// root ROUTE
app.get("/", function(req, res){
  res.render("home");
});

app.post("/search", function(req, res){

});

app.get("/results", function(req, res){
  // hard code imdb first to test 
  request('http://www.omdbapi.com/?apikey=5d52bbf2&s=star', function(error, response, body){
    // check if there is error fetching data
    if (!error && response.statusCode == 200) {
      // parse body into object and save it in a container
      var data = JSON.parse(body);
      res.render("results", {data: data});
      
    }
  });
});



// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Movie App Server has started on port 3000...");
});