const citiesReducer = (state = {citiesListStore: []}, action) => {
    switch (action.type) {
        case "GET_CITIES_LIST":
            return {
                ...state,
                citiesListStore: action.payload 
            }
        default:
         return state
    }
}

export default citiesReducer