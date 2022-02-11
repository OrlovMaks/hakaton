export const signInUser = (payload: boolean) => {
    return {
        type: 'SIGN_IN_USER',
        payload
    }

}

export const signOutUser = (payload: boolean) => {
    return {
        type: 'SIGN_OUT_USER',
        payload
    }
}

export const setUserData = (payload: any) => {
    return {
        type: 'SET_USER_DATA',
        payload
    }
}