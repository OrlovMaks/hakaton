import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    signReducer: {
        isUserSign: boolean,
        userData: any
    },
};