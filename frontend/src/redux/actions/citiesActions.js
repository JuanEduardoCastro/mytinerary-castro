import axios from "axios"

const citiesActions = {
    getCitiesList: () => {
        return async (dispatch) => {
            let response = await axios.get("http://localhost:4000/api/information/cities")
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