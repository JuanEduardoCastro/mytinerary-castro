import axios from "axios"

const citiesAction = {
    getCitiesList: () => {
        return async (dispatch) => {
            let response = await axios.get("http://localhost:4000/api/information/cities")
            let data = response.data.response
            dispatch({type: "GET_CITIES_LIST", payload: data})
        }
    },

    getCitiesFiltered: (char) => {
        return (dispatch) => {
            dispatch({type: "GET_CITIES_FILTERED", payload: char})
        }
    },

    getUniqCity: (id) => {
        return async (dispatch) => {
            let response = await axios.get(`http://localhost:4000/api/information/city/${id}`)
            let data = response.data.response
            dispatch({type: "GET_UNIQ_CITY", payload: data})
        }
    }
}

export default citiesAction