const mongoose = require("mongoose");

var Person = mongoose.model("Person");

module.exports = {
    index: function(request, response){
        Person.find({},function(err,people){
            if(err){
                console.log("Error finding people");
                response.json({message:"Error", error: err});
            }else{
            }
            response.json({message:"Success",data: people})
        })
    },

    addName: function(request, response){
        var person = new Person({name: request.params.name});
        
        person.save(function(err){
            if(err){
                console.log("Error creating person");
            }else{
                console.log("Added person");
            }
            response.redirect("/");
        })
    },

    removeName: function(request, response){
        Person.remove({name: request.params.name},function(err,person){
            if(err){
                console.log("Couldn't find person");
                response.redirect("/");
            }else{
                console.log("Destroyed person");
                response.redirect("/");
            }
        });

    },

    getName: function(request, response){
        Person.findOne({name:request.params.name}, function(err, person){
            if(err){
                console.log("Error finding person");
                response.json({message:"Error",error:err});
            }else{
                response.json({message:"Success", data: person})
            }
        })
    }

}