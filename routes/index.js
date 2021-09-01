const express = require("express");
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const usersControllers = require("../controllers/usersControllers");
const userValidator = require("../controllers/userValidator");
const passport = require("passport");
const activitiesControllers = require("../controllers/activitiesControllers");

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
.put(/* passport.authenticate('jwt', { session: false }), */ itinerariesControllers.updateItinerary)
.delete(itinerariesControllers.removeItinerary)

router.route("/itineraries/:cityId")
.get(itinerariesControllers.getItinerariesOfACity)

router.route("/user/signup")
.post(userValidator, usersControllers.addNewUser)

router.route("/user/login")
.post(usersControllers.logInUser)

router.route("/verifyToken")
.get(passport.authenticate('jwt', { session: false }), usersControllers.verifyToken)

router.route("/activities")
.post(activitiesControllers.addNewActivity)

router.route("/activities/:itineraryId")
.get(activitiesControllers.getActivitiesForItinerary)

module.exports = router