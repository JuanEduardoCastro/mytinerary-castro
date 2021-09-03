const usersReducer = (state = { token: null, userNameStore: null, userPhotoStore: null, userEmailStore: null }, action) => {
    
    switch (action.type) {
        case "LOG_IN_USER":
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("userName", action.payload.userName)
            localStorage.setItem("userPhoto", action.payload.userPhoto)
            localStorage.setItem("userEmail", action.payload.userEmail)
            return {
                token: action.payload.token,
                userNameStore: action.payload.userName,
                userPhotoStore: action.payload.userPhoto, 
                userEmailStore: action.payload.userEmail,
            }
        case "LOG_OUT_USER":
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
            localStorage.removeItem("userPhoto")
            localStorage.removeItem("userEmail")
            return {
                token: null,
                userNameStore: null,
                userPhotoStore: null,
                userEmailStore: null,
            }
        case "GET_COUNTRIES_LIST":
            return {
                countriesList: action.payload
            }
        default: 
            return state
    }  
}

export default usersReducer