const citiesReducer = (state = { citiesListStore: [], citiesFilteredStore: [], cityStore: [] }, action) => {
    switch (action.type) {
        case "GET_CITIES_LIST":
            return {
                ...state,
                citiesListStore: action.payload, 
            }

        case "GET_CITIES_FILTERED":   
            let citiesFiltered = state.citiesListStore.filter(city => (city.cityName).toLowerCase().startsWith((action.payload.toLowerCase().trim())))
            return {
                ...state,
                citiesFilteredStore: citiesFiltered
            }

        case "GET_UNIQ_CITY":
            let uniqCity = state.citiesListStore.find(city => (city._id === action.payload))
            return {
                ...state,
                cityStore: uniqCity
            }

        default:
            return state
    }
}

export default citiesReducer