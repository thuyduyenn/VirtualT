const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
       name:{
         type:String,
         required:true,
         minlength:3,
         maxlength:200
       },
        email: {
        type:String,
        required:true,
        minlength:3,
        maxlength:200
       },
       password: {
        type:String,
        required:true,
        minlength:3,
        maxlength:200
       },
       isAdmin: {
        type:String,
        required:true,
        minlength:4,
        maxlength:5
       },
       avatar: {
          type:Object,
          required:false
       }
}, {
    timestamps:true
})
const userModel = new mongoose.model("user",userSchema)
module.exports = userModel
