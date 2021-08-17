const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({

    cityName: {type: String, required: true} , 
    countryName: {type: String, required: true},
    continent: {type: String},
    coordinates: {type: Number},
    imgSource: {type: String, required: true}, 
    textColorTag: {type: Boolean, required: true},
    flag: {type: String}, 
    currency: {type: String}, 
    codeISO: {type: String}, 
    currencySymbol: {type: String},  
    description: {type: String},
    language: {type: Array},
    
})

const City = mongoose.model("city", citySchema)

module.exports = City