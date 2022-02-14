import { createStore } from 'redux';
import { ILanguages } from '../../localization/entities/ILanguages';
import { rootReducer } from './rootReducer';
//import { IUser } from '../../../modules/shared/entities/IUser';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    authorizationReducer: {
        isAuthorize: boolean;
        userData: { [key: string]: string } | null;
    }
    tableInformationReducer: {
        tableInfo: { [key: string]: string } | null;
        match: { [key: string]: string } | null;
    }
};