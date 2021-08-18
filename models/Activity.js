const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({

    // authorName: {type: String},
    // authorPhoto: {type: String},
    // itineraryName: {type: String},
    // itineraryPhoto: {type: String},
    // introSentence: {type: String},
    // price: {type: Number},
    // duration: {type: Number},
    // likes: {type: Number},
    // hashtags: {type: Array},
    // comments: {type: Array},
    
})

const Activity = mongoose.model("activity", citySchema)

module.exports = Activity
