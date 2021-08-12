const City = require("../models/City")


// const citiesList = []

const citiesControllers = {           

    getCities: (req, res) => {
        City.find()
        .then((cities) => res.json({ response: cities }))
        .catch(err => res.json({ success: false, error: err}))
    },

    addCity: (req, res) => {
        console.log(req.body)
        const addCity = new City({
            cityName: req.body.cityName, 
            countryName: req.body.countryName,
            imgSource: req.body.imgSource,
            flag: req.body.flag,
            currency: req.body.currency,
            codeISO: req.body.codesISO,
            currencySymbol: req.body.currencySymbol,
        })
        addCity.save()
        .then(() => res.json({ success: true }))
        .catch(err => res.json({ success: false, error: err}))
    },

    getCity: (req, res) => {
        City.findOne({_id: req.params.id})
        .then((city) => res.json({ response: city}))
        .catch(err => res.json({ success: false, error: err}))
    },

    removeCity: (req, res) => {
        City.findOneAndDelete({_id: req.params.id})
        .then(() => res.json({ success: true }))
        .catch(err => res.json({ success: false, error: err}))
    },

    updateCity: (req, res) => {
        City.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then(() => res.json({ success: true}))
        .catch(err => res.json({ success: false, error: err}))
    }
}

module.exports = citiesControllers