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