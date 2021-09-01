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
    
    getItinerariesOfACity: (cityId) => {
        return async (dispatch) => {
            let response = await axios.get(`http://localhost:4000/api/itineraries/${cityId}`)
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            dispatch({ type: "GET_ITINERARIES_FROM_A_CITY", payload: data })
        }
    },

    updateLikes: (id, token) => {
        return async (dispatch) => {
            let response = await axios.put(`http://localhost:4000/api/itinerary/${id}`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            // console.log(id)
            if (!response.data.succes) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            return data
        }   
    }
}

export default itinerariesActions