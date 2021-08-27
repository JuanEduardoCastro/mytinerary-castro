import axios from "axios"

const usersActions = {

    addNewUser: (userData) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/signup", { ...userData })
            if (response.data.success) {
                console.log(response.data.response)
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
            }
            return response
        }
    },

    logInUser: (logInData) => {
        return async (dispatch) => {
            let response = await axios.post("http://localhost:4000/api/user/login", { ...logInData })
            if (response.data.response) {
                dispatch({ type: "LOG_IN_USER", payload: response.data.response })
            }
            return response
        }
    },

    logOutUser: () => {
        return (dispatch) => {
            dispatch({ type: "LOG_OUT_USER" })
        }
    },

    logInLocalStorage: (token, userName, userPhoto) => {
        return (dispatch) => {
            dispatch({ type: "LOG_IN_USER", payload: { token, userName, userPhoto } })
        }
    }

}

export default usersActions