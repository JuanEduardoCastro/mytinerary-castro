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
            let updateLike = await Itinerary.findOne({ _id: req.params.id })
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
            res.json({ success: false, error: error.message})
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
            res.json({ success: false, error: "Sorry. We had a problem with database"})
        }
    },

    updateItineraryComment: async (req, res) => {
        if (req.body.comment.flag === "edit") {
            try {
                let editItineraryComment = await Itinerary.findOneAndUpdate({ _id: req.params.id, "comments.commentId": req.body.comment.commentId }, { $set: { "comments.$.userComment": req.body.comment.userComment }})
                if (editItineraryComment) {
                    res.json({ success: true, response: editItineraryComment })
                }
            } catch (error) {
                res.json({ success: false, error: "Sorry. We had a problem with database"})
            }
        } else if (req.body.comment.flag === "trash") {
            try {
                let forItineraryId = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $pull: { comments: { commentId: { $in: [ req.body.comment.commentId ] }}}} )
                if (forItineraryId) {
                    res.json({ success: true })
                } else {
                    throw new Error("no se pudo borrar")
                }
            } catch (error) {
                res.json({ success: false, error: "Sorry. We had a problem with database"})
            }
        } else {
            try {
                let addNewItineraryComment = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $push: { "comments": { "itineraryId": req.body.comment.itineraryId, "userName": req.user.userName, "userPhoto": req.user.userPhoto, "userComment": req.body.comment.userComment, "userId": req.user._id, "commentId": req.body.comment.commentId, "userEmail": req.user.userEmail }}})
                if (addNewItineraryComment) {
                    res.json({ success: true, response: addNewItineraryComment })
                } else {
                    res.json({ success: false, error: "Sorry. We had a problem with database"})
                }
            } catch (error) {
                res.json({ success: false, error: error.message})
            }
        }
    },
}

module.exports = itinerariesControllers