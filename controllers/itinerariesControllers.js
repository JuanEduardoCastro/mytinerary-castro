const { response } = require("express")
const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {

    getAllItineraries: async (req, res) => {
        try {
            let getAllItineraries = await Itinerary.find()
            if (getAllItineraries) {
                res.json({ success: true, response: getAllItineraries })
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
            let addItinerary = await itinerary.save()
            if (addItinerary) {
                res.json({ success: true, response: addItinerary })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Check the type and required of values in City" })
        }
    },

    getItinerary: async (req, res) => {
        try {
            let getItinerary = await Itinerary.finOne({ _id: req.params.id })
            if (getItinerary) {
                res.json({ success: true, response: getItinerary})
            } else { 
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t get the document"})
        }
    },

    updateItinerary: async (req, res) => {
        console.log(req.params)
        try {
            let getItinerary = await Itinerary.findOne({ _id: req.params.id })

            let updateItinerary = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $push:{ userIdList:req.user.id }}, { new: true })
            if (updateItinerary) {
                res.json({ success: true, response: updateItinerary })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t update the document" })
        }
    },

    removeItinerary: async (req, res) => {
        try {
            let removeItinerary = await Itinerary.findOneAndDelete({ _id: req.params.id })
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

    getItinerariesOfACity: async (req, res) => {

        try {
            let getItinerariesOfACity = await Itinerary.find({ cityId: req.params.cityId })
            if (getItinerariesOfACity) {
                res.json({ success: true, response: getItinerariesOfACity })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t get all documents for that city"})
        }
    }
}

module.exports = itinerariesControllers 