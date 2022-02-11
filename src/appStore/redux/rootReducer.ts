import { combineReducers } from 'redux';
import { signReducer } from './reducers/signReducer';

export const rootReducer = combineReducers({
    signReducer
});