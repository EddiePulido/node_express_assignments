
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));
db.students.update({name:"Ryan"},{$push:{interests:"Anime"}})

// use app"s get method and pass it the base route "/" and a callback
app.get("/", function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object"s .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})

app.get("/cats", function(request,response){
    var cat_array = ["/images/cat1.jpeg","/images/cat3.jpeg","/images/cat4.jpeg"];
    response.render("cats",{cats:cat_array})
})

app.get("/cat0", function(request,response){
    
    var cat = {
        name: "Cuddles",
        image:"/images/cat1.jpeg",
        food: "spaghetti",
        age: 3,
        spots:["under the bed", "in a sunbeam"]
    };
    response.render("cat1",{cat:cat});
})

app.get("/cat1", function(request,response){

    var cat = {
        name: "Mittens",
        image:"/images/cat3.jpeg",
        food: "Cat Food",
        age: 7,
        spots:["under the bed", "in a sunbeam","bed"]
    };
    response.render("cat2",{cat:cat});
})
app.get("/cat2", function(request,response){

    var cat = {
        name: "Mittens",
        image:"/images/cat4.jpeg",
        food: "PIzza",
        age: 4,
        spots:["under the bed", "in a sunbeam","bed","outside"]
    };
    response.render("cat3",{cat:cat});
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


