import axios from "axios"

const itinerariesActions = {

    getItineraries: () => {
        return async (dispatch) => {
            let response = await axios.get("https://mytinerary-castro.herokuapp.com/api/itineraries")
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            dispatch({type: "GET_ITINERARIES", payload: data })
        }
    },
    
    getItinerariesOfACity: (cityId) => {
        return async (dispatch) => {
            let response = await axios.get(`https://mytinerary-castro.herokuapp.com/api/itineraries/${cityId}`)
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            dispatch({ type: "GET_ITINERARIES_FROM_A_CITY", payload: data })
        }
    },

    getItineraryForUserLike: (token, id) => {
        return async (dispatch) => {
            let response = await axios.get(`https://mytinerary-castro.herokuapp.com/api/itinerary/likes/${id}`, { headers: { Authorization: "Bearer " + token }}, )
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            } else {
                return response.data
            }
        }   
    },

    updateLikes: (token, id) => {
        return async (dispatch) => {
            let response = await axios.put(`https://mytinerary-castro.herokuapp.com/api/itinerary/likes/${id}`, void 0, { headers: { Authorization: "Bearer " + token }}, )
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            } else {
                return response.data.response
            }
        }   
    },

    addNewComment: (id, comment, token) => {
        return async (dispatch) => {
            let response = await axios.put(`https://mytinerary-castro.herokuapp.com/api/itinerary/comments/${id}`, { comment }, { headers: { Authorization: "Bearer " + token }}, )
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            } else {
                return response
            }
        }
    },

    getComments: (id) => {
        return async (dispatch) => {
            let response = await axios.get(`https://mytinerary-castro.herokuapp.com/api/itinerary/comments/${id}`)
            if (!response.data.success) {
                throw new Error("There was a problem with the database")
            } else {
                return response.data
            }
        }
    },

    deleteCommentByUserId: (id, comment, token) => {
        return async (dispatch) => {
            let response = await axios.put(`https://mytinerary-castro.herokuapp.com/api/itinerary/comments/${id}`,  { comment } , { headers: { Authorization: "Bearer " + token }}, )
            if (!response.data.success) {
                throw new Error("problem con database")
            } else {
                return response.data
            }
        }
    }
}

export default itinerariesActions