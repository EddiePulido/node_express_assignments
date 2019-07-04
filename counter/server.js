
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

var session = require('express-session');

// invoke express and store the result in the variable app
var app = express();

// require body-parser
var bodyParser = require("body-parser");
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


// use app"s get method and pass it the base route "/" and a callback
app.get("/", function(request, response) {
    if(request.session.count == null){
        request.session.count = 0;
    }

    request.session.count++;
    var count = request.session.count;

    response.render("index",{count:count});
})

app.get("/two",function(request,response){
    request.session.count++;
    response.redirect("/");
})

app.get("/reset",function(request,response){
    request.session.destroy();
    response.redirect("/");
})

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views"); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})


