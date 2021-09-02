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
            let getItinerary = await Itinerary.findOne({ _id: req.params.id })
            if (getItinerary) {
                res.json({ success: true, response: getItinerary})
            } else { 
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: error.message/* "Couldn´t get the document" */})
        }
    },

    getItineraryForUserLike: async (req, res) => {
        try {
            let getItineraryForUserLike = await Itinerary.findOne({ _id: req.params.id })
            if (!getItineraryForUserLike.usersIdList.includes(req.user._id)) {
                console.log("backend")
                res.json({ success: true, userLike: false, response: getItineraryForUserLike })
            } else {
                res.json({ success: true, userLike: true, response: getItineraryForUserLike })
            }
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    },

    updateLikes: async (req, res) => {
        try {
            let updateLike = await Itinerary.findOneAndUpdate({ _id: req.params.id })
            if (!updateLike.usersIdList.includes(req.user._id)) {
                await updateLike.updateOne({ $push: { "usersIdList": req.user._id }}, { new: true }) 
                if (updateLike) {
                    res.json({ success: true, response: updateLike })
                }
            } else {
                await updateLike.updateOne({ $pull: { "usersIdList": req.user._id }},  { new: true })
                if (updateLike) {
                    res.json({ success: true, response: updateLike })
                }
            }    
        } catch (error) {
            res.json({ success: false, error: error.message/* "Couldn´t get the document" */})
            console.log(error)
        }    
    },

    updateItinerary: async (req, res) => {
        try {
            let getItinerary = await Itinerary.findOneAndUpdate({ _id: req.params.id }, {...req.body}, {new: true})
            if (getItinerary) {
                res.json({ success: true, response: getItinerary})
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
    },

    getItineraryComments: async (req, res) => {
        try {
            let getItineraryComments = await Itinerary.find({ _id: req.params.id })
            if (getItineraryComments) {
                res.json({ success: true, response: getItineraryComments})
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "no pudo traer los itinerarios"})
        }
    },

    addNewItineraryComment: async (req, res) => {
        try {
            // console.log(req.body)
            let addNewItineraryComment = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $push: { "comments": { "userName": req.user.userName, "userPhoto": req.user.userPhoto, "userComment": req.body.comment, "userId": req.user._id }}})
            if (addNewItineraryComment) {
                res.json({ success: true, response: addNewItineraryComment })
            } else {
                throw new Error ("no grabo el comentario")
            }
        } catch (error) {
            res.json({ success: false, error: error.message})
        }
    },

    // updateLikes: async (req, res) => {
    //     try {
    //         let updateLike = await Itinerary.findOneAndUpdate({ _id: req.params.id })
    //         if (!updateLike.usersIdList.includes(req.user._id)) {
    //             await updateLike.updateOne({ $push: { "usersIdList": req.user._id }}, { new: true }) 
    //             if (updateLike) {
    //                 res.json({ success: true, response: updateLike })
    //             }
    //         } else {
    //             await updateLike.updateOne({ $pull: { "usersIdList": req.user._id }}, /* { new: true } */)
    //             if (updateLike) {
    //                 res.json({ success: true, response: updateLike })
    //             }
    //         }    
    //     } catch (error) {
    //         res.json({ success: false, error: error.message/* "Couldn´t get the document" */})
    //         console.log(error)
    //     }    
    // },
}

module.exports = itinerariesControllers