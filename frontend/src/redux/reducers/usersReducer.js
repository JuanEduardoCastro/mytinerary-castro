const usersReducer = (state = { token: null, userNameStore: null, }, action) => {

    switch (action.type) {
        case "LOG_IN_USER":
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('userName', action.payload.userName)
            return {
                toke: action.payload.token,
                // logInStore: true,
                userNameStore: action.payload.userName
            }
        case "LOG_OUT_USER":
            localStorage.removeItem("token")
            localStorage.removeItem("userName")
            return {
                token: null,
                // logInStore: false,
                userNameStore: null
            }
        default: 
            return state
    }  
}

export default usersReducer