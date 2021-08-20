import axios from "axios"

const itinerariesActions = {

    getItineraries: () => {
        return async (dispatch) => {
            let response = await axios.get("http://localhost:4000/api/itineraries")
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            dispatch({type: "GET_ITINERARIES", payload: data })
        }
    },
    
    getItinerariesOfACity: (id) => {
        return async (dispatch) => {
            let response = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            dispatch({ type: "GET_ITINERARIES_FROM_A_CITY", payload: data })
        }
    }
}

export default itinerariesActions