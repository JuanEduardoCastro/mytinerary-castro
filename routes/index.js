const express = require("express");
const citiesControllers = require("../controllers/citiesControllers")

const router = express.Router()

router.route("/information/cities")
.get(citiesControllers.getCities)                                                  //revisar
.post()

router.route("/information/city/:id")
.get(citiesControllers.getCity)                                                  //esta es la que va con :id


module.exports = router