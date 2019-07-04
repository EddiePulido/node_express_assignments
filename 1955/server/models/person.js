const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    name: {type:String}},{timestamps:true}
)


mongoose.model("Person", PersonSchema);
module.exports = mongoose.model("Person");