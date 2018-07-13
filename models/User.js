const mongoose = require("mongoose");

const  userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String    
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;