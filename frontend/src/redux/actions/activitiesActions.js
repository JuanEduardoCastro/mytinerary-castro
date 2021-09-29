import axios from "axios"

const activitiesActions = {

    getActivitiesOfItinerary: (id) => {
        return async (dispatch) => {
            let response = await axios.get(`https://mytinerary-castro.herokuapp.com/api/activities/${id}`) 
            if (!response.data.success) {
                throw new Error("problema con DB")
            } else {
                let data = response.data.response
                return data
            }
        }
    },
    
}

export default activitiesActions