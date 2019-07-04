
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

// use app"s get method and pass it the base route "/" and a callback
app.get("/", function(request, response) {
    
   response.render("index");
})


app.use(express.static(__dirname + "/client/static"));
app.set("views", __dirname + "/client/views"); 
app.set("view engine", "ejs");





