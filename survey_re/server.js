
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

var session = require("express-session");

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})
// require body-parser
var bodyParser = require("body-parser");

var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "keyboardkitteh",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// use app"s get method and pass it the base route "/" and a callback
app.get("/", function(request, response) {
   
   response.render("index");
});

app.post("/submit", function(request, response){
    response.render("index");
});

io.on('connection', function (socket) { //2

  socket.on("posting_form", function (data){
    var formJSON = JSON.stringify((data.form));
    console.log(formJSON);
    var randomInt = Math.floor(Math.random()* 1000) + 1;
    socket.emit("updated_message", {form: formJSON})
    socket.emit("random_number", {number: randomInt})
  })



    
});


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views"); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");