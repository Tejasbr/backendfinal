let mongoose = require("mongoose");

const footballschema = new mongoose.Schema({
    // id: {type:Number},
    firstName: {type:String, default:'Neymar', required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    birthdate: {type:String, required:true},
    
  });

module.exports = mongoose.model('user', footballschema);