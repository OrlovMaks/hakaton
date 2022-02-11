const initialState = {
    isUserSign: false,
    userData: null
}

interface IAction {
    type: string,
    payload: boolean
}

export const signReducer = (state = initialState, action: IAction) => {
    const { type, payload } = action;
    switch (type) {
        case 'SIGN_OUT_USER':
            return {
                ...state,
                isUserSign: payload
            }
        case 'SIGN_IN_USER':
            return {
                ...state,
                isUserSign: payload
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: payload
            }
        default:
            return state
    }
}