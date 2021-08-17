const City = require("../models/City")

const citiesControllers = {           

    getCities: async (req, res) => {
        try {
            var cities = await City.find()
            if (cities) {
                res.json({ success: true, response: cities })
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({ success: false, response: "Couldn´t get all documents" })
            console.log(error.message)
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
        res.json({ success: false, error: "Check the type and required of value in City" })
        console.log(error)
        }
    },

    //catchea error
    getCity: async (req, res) => {
        try {
            var city = await City.findOne({ _id: req.params.id })
            if (city) {
                res.json({ success: true, response: city })
            } else {
                throw new Error() 
            }

        } catch (error) {
            res.json({ success: false, response: "Couldn´t get the document" })
            console.log(error.message)

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
            console.log(error)
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
        }
    }
}

module.exports = citiesControllers