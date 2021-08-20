const itinerariesReducer = (state = {itinerariesStore: []}, action) => {
    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itinerariesStore: action.payload
            }
            
        default:
            return state
    }
}

export default itinerariesReducer