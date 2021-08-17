const City = require("../models/City")

const citiesControllers = {           

    getCities: async (req, res) => {
        try {
            var cities = await City.find()
            if (cities) {
                res.json({ success: true, response: cities })
            } else {
                throw new Error("Couldn´t get all documents")
            }
        } catch (error) {
            res.json({ success: false, response: error.message })
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
            throw new Error("Check the type and required of value in City")
        }
    } catch (error) {
        res.json({ success: false, error: error.message })
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
                throw new Error("Couldn´t get the document") 
            }

        } catch(error) {
            res.json({ success: false, response: error.message })
            /* console.log(error.message) */

        }
    },

    //catchea error
    removeCity: async (req, res) => {
        try {
            var removeCity = await City.findOneAndDelete({ _id: req.params.id })
            if (removeCity) {
                res.json({ success: true })
            } else {
                throw new Error("Couldn´t find the document to remove")
            }
        } catch (error) {
            res.json({ success: false, error: error.message })
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
                throw new Error("Couldn´t update the document")
            }
        } catch (error) {
            res.json({ success: false, error: error.message })
        }
    }
}

module.exports = citiesControllers