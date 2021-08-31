const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({

    activityPhoto: {type: String, required: true},
    activityTitle: {type: String, required: true},
    activityDescription: {type: String},
    itineraryId: {type: mongoose.Types.ObjectId, ref: "Itinerary", required: true},
    
})

const Activity = mongoose.model("activity", activitySchema)

module.exports = Activity
