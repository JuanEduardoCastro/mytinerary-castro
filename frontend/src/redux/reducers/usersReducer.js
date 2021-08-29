const usersReducer = (state = { token: null, userNameStore: null, userPhotoStore: null }, action) => {

    switch (action.type) {
        case "LOG_IN_USER":
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("userName", action.payload.userName)
            localStorage.setItem("userPhoto", action.payload.userPhoto)
            return {
                token: action.payload.token,
                userNameStore: action.payload.userName,
                userPhotoStore: action.payload.userPhoto
            }
        case "LOG_OUT_USER":
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
            localStorage.removeItem("userPhoto")
            return {
                token: null,
                userNameStore: null,
                userPhotoStore: null
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