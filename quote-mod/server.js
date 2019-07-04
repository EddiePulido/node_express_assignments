var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

var io = require("socket.io")(server);

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/quotes");


app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/client/views"); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");
var UserSchema = new mongoose.Schema({
 name: {type:String, required: true, minLength: 2},
 quote: {type:String, required: true, minLength: 5},
 created_on:{type: Date, default: Date.now}
},{timestamps: true})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')





require('./server/config/routes.js')(app)