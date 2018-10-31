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

app.post("/search", function(){

});

app.get("/results", function(){

});



// ============================================================================
// START SERVER
// ============================================================================
app.listen(3000, function(){
  console.log("Movie App Server has started on port 3000...");
});