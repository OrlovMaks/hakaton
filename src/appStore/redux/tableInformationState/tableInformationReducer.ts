import { ITableInfoAction } from "./tableInformationActions";

const initialState: ITableInfoReducer = {
    tableInfo: null,
    match: null
};

interface ITableInfoReducer {
    tableInfo: { [key: string]: string } | null;
    match: { [key: string]: string } | null;
};

export const tableInformationReducer = (store = initialState, action: ITableInfoAction) => {
    const { type, payload }: ITableInfoAction = { ...action };
    switch (type) {
        case 'SET_TABLE': return {
            ...store,
            tableInfo: payload,
        };
        case 'DELETE_TABLE': return {
            ...store,
            tableInfo: null,
        };
        case 'SET_MATCH': return {
            ...store,
            match: payload,
        };
        default: return store;
    };
};