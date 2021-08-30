const Activity = require("../models/Activity")

const activitiesControllers = {
    addNewActivity: async (req, res) => {
        try {
            const activity = new Activity({ ...req.body})
            let addActivity = await activity.save()
            if (addActivity) {
                res.json({ success: true, response: addActivity })
            } else {
                throw new Error
            }
        } catch (error) {
            res.json({ success: false, error: "no se guardo activity"})
        } 
    },

    getActivities: async (req, res) => {
        try {
            let getActivities = await Activity.find()
            if (getActivities) {
                res.json({ success: true, response: getActivities })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "no se pudo traer los activities"})
        }
    },

    getActivity: async (req, res) => {
        try {
            let getActivity = await Avtivity.findOne({ _id: req.params.id})
            if (getActivity) {
                res.json({ success: true, response: getActivity })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "no se pudo traer el activity"})
        }
    },
 
    
    removeActivity: async (req, res) => {
        try {
            let removeActivity = await Activity.findOneAndDelete({ _id: req.body.id })
            if (removeActivity) {
                res.json({ success: true, response: removeActivity })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "no se pudo borrar el activity" })
        }
    },
    
    getActivitiesForItinerary: async (req, res) => {
        try {
            let getActivitiesForItinerary = await Activity.find({ itineraryId: req.params.itineraryId })
            if (getActivitiesForItinerary) {
                res.json({ success: true, response: getActivitiesForItinerary })
            } else {
                throw new Error
            }
        } catch (error) {
            res.json({ succes: true, error: "no se pudo traer las actvities del itinerario"})
        }
    },
}

module.exports = activitiesControllers 

    
// updateItinerary: async (req, res) => {
//     try {
//         let updateItinerary = await Itinerary.findOneAndUpdate({ _id: req.params.id}, {...req.body}, {new: true})
//         if (updateItinerary) {
//             res.json({ success: true, response: updateItinerary })
//         } else {
//             throw new Error()
//         }
//     } catch (error) {
//         res.json({ success: false, error: "Couldn´t update the document" })
//     }
// },


// getItinerariesOfACity: async (req, res) => {

//     try {
//         let getItinerariesOfACity = await Itinerary.find({ cityId: req.params.cityId })
//         if (getItinerariesOfACity) {
//             res.json({ success: true, response: getItinerariesOfACity })
//         } else {
//             throw new Error()
//         }
//     } catch (error) {
//         res.json({ success: false, error: "Couldn´t get all documents for that city"})
//     }
// }
