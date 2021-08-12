const citiesList = [
        {id: 0, cityName: "Hong Kong", countryName: "Hong Kong", imgSource: "hong_kong_04.jpeg", },
        {id: 1, cityName: "Bangkok", countryName: "Thailand", imgSource: "bangkok01.jpeg", },
        {id: 2, cityName: "Macau", countryName: "Macau", imgSource: "macau04.jpeg", },
        {id: 3, cityName: "Singapore", countryName: "Singapore", imgSource: "singapore03.jpeg", },
        {id: 4, cityName: "London", countryName: "England", imgSource: "london02.jpeg", },
        {id: 5, cityName: "Paris", countryName: "France", imgSource: "paris05.jpeg", },
        {id: 6, cityName: "Dubai", countryName: "United Arab Emirates", imgSource: "dubai03.jpeg", },
        {id: 7, cityName: "Delhi", countryName: "India", imgSource: "delhi06.jpeg", },
        {id: 8, cityName: "Istanbul", countryName: "Turkey", imgSource: "istanbul04.jpeg", },
        {id: 9, cityName: "Kuala Lumpur", countryName: "Malaysia", imgSource: "kualalumpur05.jpeg", },
        {id: 10, cityName: "New York", countryName: "United States", imgSource: "new_york04.jpeg", },
        {id: 11, cityName: "Shenzhen", countryName: "China", imgSource: "shenzhen05.jpeg", },
        {id: 12, cityName: "Mumbai", countryName: "India", imgSource: "mumbai01.jpeg", },
        {id: 13, cityName: "Phuket", countryName: "Thailand", imgSource: "phuket01.jpeg", },
        {id: 14, cityName: "Antalya", countryName: "Turkey", imgSource: "antalya01.jpeg", },
    ]

const citiesControllers = {                 //cada propiedad vva a ser un controlador
    getCities: (req, res) => {
        res.json({response: citiesList})
    },
    getCity: (req, res) => {
        const city = citiesList.find(city => city.id === parseInt(req.params.id))
        res.json({response: city})
    },
}

module.exports = citiesControllers