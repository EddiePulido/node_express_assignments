
const mongoose = require("mongoose");
// const User = require("../models/quote.js");

var User = mongoose.model("User");

module.exports = {
  index: function(request,response){
    console.log(User);
    response.render("index");
  },

  showQuotes: function(request, response){
    var users_info = [];

    User.find({}, function(err, users) {
        if(err) {
        console.log('something went wrong with finding users')
      } 
      else {
        for(user in users){
          users_info.push({name: users[user]['name'], age: users[user]['quote']});
        }
      }
      
      console.log(users_info.length);

    response.render("quotes",{users:users});
    })
  },

  makeQuote: function(request, response){
  //   var user = new User({name: request.body.name, quote: request.body.quote});
  // // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  // user.save(function(err) {
  //   // if there is an error console.log that something went wrong!
  //   if(err) {
  //     console.log('something went wrong');
  //   } else { // else console.log that we did well and then redirect to the root route
  //     console.log('successfully added a user!');
  //   }
  //   response.redirect('/');
  // })
  User.create(request.body, function(err, data){
    console.log(request.body);
    if(err){
        console.log("error creating quote");
    }else{
        console.log("created quote");
    }
    response.redirect('/');
  })

  }

}