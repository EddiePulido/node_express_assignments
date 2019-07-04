require("../models/owl.js");
const mongoose = require ("mongoose");

var Owl = mongoose.model("Owl");

module.exports = {
    index: function(request,response){
        Owl.find({}, function(err, owls) {
            if(err) {
            console.log('something went wrong with finding users')
          }
            response.render("index",{owls:owls});
        })
    },

    newOwl: function(request, response){
        response.render("newOwl");
    },

    oneOwl: function(request, response){
        Owl.findOne({_id:request.params.id},function(err, owl){
            if(err){
                console.log("Something went wrong with finding owl")
            }else{
                response.render("owlPage",{owl:owl});
            }
        })
    },

    saveOwl: function(request, response){
        var owl =new Owl({name: request.body.name, weight: request.body.weight});
        owl.save(function(err){
            if(err) {
            console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            }
            response.redirect('/');
        })
    },

    editOwlPage: function(request, response){
        var owl_info = {};
        Owl.findOne({_id:request.params.id},function(err, owl){
            if(err){
                console.log("Something went wrong with finding owl")
            }else{
                owl_info.name = owl.name;
                owl_info.weight = owl.weight;
                response.render("editOwl",{owl:owl})
            }
        })
    },

    editOwl: function(request, response){
        Owl.update({_id:request.params.id},{
            name: request.body.name,
            weight: request.body.weight
        },function(err,owl){
            if(err){
                console.log("could not update")
            }else{
                response.redirect("/owls/" + request.params.id);
            }
        })
    },

    destroy: function(request, response){
        Owl.remove({_id:request.params.id},function(err,owl){
            if(err){
                console.log("Something went wrong with finding owl")
            }
        })
    
        response.redirect("/");

    }

}