const itinerariesReducer = (state = {itinerariesStore: [], itinerariesOfACityStore: [], commentsStore: []}, action) => {
    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itinerariesStore: action.payload
            }
        case "GET_ITINERARIES_FROM_A_CITY":
            return {
                ...state,
                itinerariesOfACityStore: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer