const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {

    getAllItineraries: async (req, res) => {
        try {
            var itineraries = await Itinerary.find()
            if (itineraries) {
                res.json({ success: true, response: itineraries })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, response: "Couldn´t get all documents" })
            console.error(error.message)
        }
    },

    addItinerary: async (req, res) => {
        try {
            const itinerary = new Itinerary({ ...req.body })
            var addItinerary = await itinerary.save()
            if (addItinerary) {
                res.json({ success: true, response: addItinerary })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Check the type and required of values in City" })
        }
    },

    removeItinerary: async (req, res) => {
        try {
            var removeItinerary = await Itinerary.findOneAndDelete({ _id: req.params.id })
            if (removeItinerary) {
                res.json({ success: true, response: removeItinerary })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t find the document to remove" })
            console.error(error.message)
        }
    },

    updateItinerary: async (req, res) => {
        try {
            var updateItinerary = await Itinerary.findOneAndUpdate({ _id: req.params.id}, {...req.body}, {new: true})
            if (updateItinerary) {
                res.json({ success: true, response: updateItinerary})
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t update the document" })
        }
    }
}

module.exports = itinerariesControllers 