//import { IUser } from "../../../../modules/shared/entities/IUser";

export interface IMatchAction {
    type: 'SET_MATCH' | 'DELETE_MATCH';
    payload: { [key: string]: string } | null;
};

export const setMatchAction = (value: { [key: string]: string }): IMatchAction => {
    return {
        type: 'SET_MATCH',
        payload: value,
    };
};

export const deleteMatchAction = (): IMatchAction => {
    return {
        type: 'DELETE_MATCH',
        payload: null
    };
};