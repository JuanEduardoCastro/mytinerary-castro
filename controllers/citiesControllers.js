const City = require("../models/City")

const citiesControllers = {           

    getCities: async (req, res) => {
        try {
            var getCities = await City.find()
            if (getCities) {
                res.json({ success: true, response: getCities })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, response: "Couldn´t get all documents" })
            console.error(error.message)
        }
    },

    //catchea error
    addCity: async (req, res) => {
        try {
        const city = new City({ ...req.body })
        var addCity = await city.save()
        if (addCity) {
            res.json({ success: true })
        } else {
            throw new Error()
        }
    } catch (error) {
        res.json({ success: false, error: "Check the type and required of values in City" })
        console.error(error)
        }
    },

    //catchea error
    getCity: async (req, res) => {
        try {
            var getCity = await City.findOne({ _id: req.params.id })
            if (getCity) {
                res.json({ success: true, response: getCity })
            } else {
                throw new Error() 
            }

        } catch (error) {
            res.json({ success: false, response: "Couldn´t get the document" })
            console.errorg(error.message)

        }
    },

    //catchea error
    removeCity: async (req, res) => {
        try {
            var removeCity = await City.findOneAndDelete({ _id: req.params.id })
            if (removeCity) {
                res.json({ success: true })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t find the document to remove" })
            console.error(error.message)
        }
    },

    //catchea error
    updateCity: async (req, res) => {
        try {
            var updateCity = await City.findOneAndUpdate({ _id: req.params.id}, {...req.body}, {new: true} )
            if (updateCity) {
                res.json({ success: true, response: updateCity }) 
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, error: "Couldn´t update the document" })
            console.error(error.message)
        }
    }
}

module.exports = citiesControllers