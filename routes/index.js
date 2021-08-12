const express = require("express");
const citiesControllers = require("../controllers/citiesControllers")

const router = express.Router()

router.route("/information/cities")
.get(citiesControllers.getCities)
.post(citiesControllers.addCity)

router.route("/information/city/:id")
.get(citiesControllers.getCity)
.delete(citiesControllers.removeCity)
.put(citiesControllers.updateCity)

module.exports = router