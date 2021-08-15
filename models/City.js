const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({

    cityName: {type: String, required: true} , 
    countryName: {type: String, required: true},
    imgSource: {type: String, required: true}, 
    flag: {type: String}, 
    currency: {type: String}, 
    codeISO: {type: String}, 
    currencySymbol: {type: String},  
})

const City = mongoose.model("city", citySchema)

module.exports = City