const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema({

    authorName: {type: String},
    authorPhoto: {type: String},
    itineraryName: {type: String},
    itineraryPhoto: {type: String},
    introSentence: {type: String},
    price: {type: Number},
    duration: {type: Number},
    likes: {type: Number},
    hashtags: {type: Array},
    comments: {type: Array},
    usersIdList: {type: Array},
    cityId: {type: mongoose.Types.ObjectId, ref: "city"}
    
})

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary