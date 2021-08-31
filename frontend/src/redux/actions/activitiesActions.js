import axios from "axios"

const activitiesActions = {

    getActivitiesOfItinerary: (id) => {
        return async (dispatch) => {
            let response = await axios.get(`http://localhost:4000/api/activities/${id}`) 
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