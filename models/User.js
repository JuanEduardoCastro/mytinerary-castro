const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    userEmail: {type: String, required: true},
    userName: {type: String, required: true},
    userLastName: {type: String, required: true},
    userPassword: {type: String, required: true},
    userPhoto: {type: String, required: true},
    userCountry: {type: String, required: true},
    google: {type: Boolean, default: false}
    
})

const User = mongoose.model("user", userSchema)

module.exports = User