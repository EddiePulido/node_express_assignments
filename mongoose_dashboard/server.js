

var express = require("express");
var app = express();

var session = require("express-session");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var path = require("path");


var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

var io = require("socket.io")(server);

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/client/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/client/views"); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");

// tell the express app to listen on port 8000, always put this at the end of your server.js file



