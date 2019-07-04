const mongoose = require("mongoose");

var OwlSchema = new mongoose.Schema({
    name: {type:String},
    weight:{type:Number}
   },{timestamps: true})
   
module.exports = mongoose.model('Owl', OwlSchema); 
