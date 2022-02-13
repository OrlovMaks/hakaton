// import { IUser } from "../../../../modules/shared/entities/IUser"
import { IAuthorizeAction } from "./authenticationStateActions";

const initialState: IAuthorizationReducer = {
    isAuthorize: false,
    userData: null,
};

interface IAuthorizationReducer {
    [key: string]: boolean | { [key: string]: string } | null;
};

export const authorizationReducer = (store = initialState, action: IAuthorizeAction) => {
    const { type, payload }: IAuthorizeAction = { ...action };
    switch (type) {
        case 'SET_AUTHORIZE': return {
            ...store,
            isAuthorize: payload,
        };
        case 'SET_USER_DATA': return {
            ...store,
            userData: payload,
        };
        case 'SIGN_OUT': return {
            isAuthorize: false,
            userData: null,
        };
        default: return store;
    };
};