const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
 name: {type:String, required: true, minLength: 2},
 quote: {type:String, required: true, minLength: 5}
},{timestamps: true})

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User'); // We are setting this Schema in our Models as 'User'
