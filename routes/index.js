const express = require("express");
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")

const router = express.Router()

router.route("/information/cities")
.get(citiesControllers.getCities)
.post(citiesControllers.addCity)

router.route("/information/city/:id")
.get(citiesControllers.getCity)
.delete(citiesControllers.removeCity)
.put(citiesControllers.updateCity)

router.route("/itineraries")
.get(itinerariesControllers.getAllItineraries)
.post(itinerariesControllers.addItinerary)

router.route("/itinerary/:id")
.delete(itinerariesControllers.removeItinerary)

module.exports = router