
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");

// invoke express and store the result in the variable app
var app = express();

var session = require("express-session");

// require body-parser
var bodyParser = require("body-parser");
// use it!
app.use(bodyParser.urlencoded({extended: true}));

var path = require("path");

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/message_board");

var CommentSchema = new mongoose.Schema({
    name:{type:String},
    comment:{type:String}
},{timestamps: true})


var MessageSchema = new mongoose.Schema({
 name: {type:String},
 message:{type:String},
 comments: [CommentSchema]
},{timestamps: true})

mongoose.model('Message', MessageSchema); 
mongoose.model("Comment", CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model("Comment");


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

// use app"s get method and pass it the base route "/" and a callback
app.get("/", function(request, response) {
    Message.find({},function(err, messages){
        if(err){
            console.log("Problem finding messages");
        }else{
            response.render("index",{messages:messages});
        }
    })    

    
})

app.post("/message", function(request, response){
    var message = new Message({name: request.body.name, message: request.body.message});
    message.save(function(err){
        if(err){
            console.log("Error creating new message");
        }else{
            console.log("Successfully created message");
        }
        response.redirect("/");
    })
})

app.post("/comment", function(request, response){
    // var comment = new Comment({name: request.body.name, comment: request.body.comment});

    // comment.save(function(err){
    //     if(err){
    //         console.log("error creating")
    //     }else{
    //         Message.findOneAndUpdate({_id: request.body.id},{$push: {comments: comment},function(err){
    //             if(err){
    //                 console.log("error saving to messages")
    //             }else{
    //                 console.log("saved comment to messages")
    //                 response.redirect("/");
    //             }
    //         }})
    //     }
    // })

    Message.findOne({_id: request.body.id},function(err,message){
        if(err){
            console.log("Error finding message")
        }else{
            var comment = new Comment({name: request.body.name, comment: request.body.comment, _message: request.body.id});
            comment.save(function(err){
                if(err){
                    console.log("error saving comment");
                }else{
                    message.comments.push(comment);
                    message.save(function(err){
                        if(err){
                            console.log("error saving message");
                        }else{
                            console.log("saved")
                            response.redirect("/")
                        }
                    })
                }
            })
        }
    })

    // Comment.create(request.body, function(err,data){
    //     if(err){
    //         console.log("Error creating message");
    //     }else{
    //         Message.findOneAndUpdate({_id:request.body.id},{$push:{comments: data}}, function(err, data){
    //             if(err){
    //                 console.log("Error saving comment to messages");
    //             }else{
    //                 console.log("Successfully created comment");
    //                 response.redirect("/");
    //             }
    //         })
    //     }
    // })
})

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views"); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");





