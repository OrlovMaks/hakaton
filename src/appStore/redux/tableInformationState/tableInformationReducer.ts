import { ITableInfoAction } from "./tableInformationActions";

const initialState: ITableInfoReducer = {
    tableInfo: null,
};

interface ITableInfoReducer {
    tableInfo: { [key: string]: string } | null;
};

export const tableInformationReducer = (store = initialState, action: ITableInfoAction) => {
    const { type, payload }: ITableInfoAction = { ...action };
    switch (type) {
        case 'SET_TABLE': return {
            ...store,
            isAuthorize: payload,
        };
        case 'DELETE_TABLE': return {
            isAuthorize: false,
            userData: null,
        };
        default: return store;
    };
};