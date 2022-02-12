//import { IUser } from "../../../../modules/shared/entities/IUser";

export interface IAuthorizeAction {
    type: 'SET_AUTHORIZE' | 'SET_USER_DATA' | 'SIGN_OUT';
    payload: boolean | { [key: string]: string } | null;
};

export const setIsAuthorizeAction = (value: boolean): IAuthorizeAction => {
    return {
        type: 'SET_AUTHORIZE',
        payload: value,
    };
};

export const setUserData = (value: { [key: string]: string }): IAuthorizeAction => {
    return {
        type: 'SET_USER_DATA',
        payload: value,
    };
}

export const signOut = (): IAuthorizeAction => {
    return {
        type: 'SIGN_OUT',
        payload: null
    };
};