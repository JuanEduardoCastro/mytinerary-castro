import axios from "axios"

const citiesActions = {
    getCitiesList: (token) => {
        return async (dispatch) => {
            let response = await axios.get("https://mytinerary-castro.herokuapp.com/api/information/cities", {
                headers: { 'Authorization' : 'Bearer ' + token }}
                )
            if(!response.data.success) {
                throw new Error("There was a problem with the database")
            }
            let data = response.data.response
            dispatch({type: "GET_CITIES_LIST", payload: data})
        }
    },

    getCitiesFiltered: (letter) => {
        return (dispatch) => {
            dispatch({type: "GET_CITIES_FILTERED", payload: letter})
        }
    },

    getUniqCity: (id) => {
        return (dispatch) => {
            dispatch({type: "GET_UNIQ_CITY", payload: id})
        }
    },
}

export default citiesActions