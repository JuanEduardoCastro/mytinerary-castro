import axios from "axios"

const citiesAction = {
    getCitiesList: () => {
        return async (dispatch) => {
            let response = await axios.get("http://localhost:4000/api/information/cities")
            let data = response.data.response
            dispatch({type: "GET_CITIES_LIST", payload: data})
        }
    }
}

export default citiesAction