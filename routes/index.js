const express = require("express");
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");
const userValidator = require("../controllers/userValidator");

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
.get(itinerariesControllers.getItinerary)
.put(itinerariesControllers.updateItinerary)
.delete(itinerariesControllers.removeItinerary)

router.route("/itineraries/:cityId")
.get(itinerariesControllers.getItinerariesOfACity)

router.route("/user/signup")
.post(userValidator, usersControllers.addNewUser)

router.route("/user/login")
.post(usersControllers.logInUser)


module.exports = router