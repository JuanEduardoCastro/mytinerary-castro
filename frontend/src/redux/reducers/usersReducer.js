const usersReducer = (state = { token: null, userNameStore: null, userPhotoStore: null }, action) => {

    switch (action.type) {
        case "LOG_IN_USER":
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('userName', action.payload.userName)
            return {
                token: action.payload.token,
                userNameStore: action.payload.userName,
                userPhotoStore: action.payload.userPhoto
            }
        case "LOG_OUT_USER":
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
            return {
                token: null,
                userNameStore: null,
                userPhotoStore: null
            }
        default: 
            return state
    }  
}

export default usersReducer