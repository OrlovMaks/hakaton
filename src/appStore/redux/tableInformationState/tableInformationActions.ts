//import { IUser } from "../../../../modules/shared/entities/IUser";

export interface ITableInfoAction {
    type: 'SET_TABLE' | 'DELETE_TABLE' | 'SET_MATCH';
    payload: { [key: string]: string } | null;
};

export const setTableInfoAction = (value: { [key: string]: string }): ITableInfoAction => {
    return {
        type: 'SET_TABLE',
        payload: value,
    };
};

export const deleteTableInfoAction = (): ITableInfoAction => {
    return {
        type: 'DELETE_TABLE',
        payload: null
    };
};

export const setMatchAction = (value: { [key: string]: string }): ITableInfoAction => {
    return {
        type: 'SET_MATCH',
        payload: value,
    };
};