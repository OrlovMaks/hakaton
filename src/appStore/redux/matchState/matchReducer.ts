import { IMatchAction } from "./matchActions";

const initialState: IMatchReducer = {
    match: null,
};

interface IMatchReducer {
    match: { [key: string]: string } | null;
};

export const matchReducer = (store = initialState, action: IMatchAction) => {
    const { type, payload }: IMatchAction = { ...action };
    switch (type) {
        case 'SET_MATCH': return {
            ...store,
            match: payload,
        };
        case 'DELETE_MATCH': return {
            ...store,
            match: null,
        };
        default: return store;
    };
};