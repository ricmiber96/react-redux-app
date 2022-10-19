const authReducer = (state = false, action) => {
    switch (action.type) {
        case '@auth/login':
            return true
        case '@auth/logout':
            return false
    
        default:
            return state
    }
}


export default authReducer