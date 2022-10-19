export const actionIncremented = () =>{
    return {
        type: '@counter/incremented'
    }
}

export const actionDecremented = () =>{
    return { 
        type: '@counter/decremented'
    }
}

export const actionReset = () => {
   return {
        type: '@counter/reseted'
   }
}

export const actionLogin = () => {
    return {
        type: '@auth/login'
    }
}

export const actionLogout = () => {
    return {
        type: '@auth/logout'
    }
}

