import { combineReducers } from "redux"
import { authorizationReducer } from "./authenticationState/authorizationStateReducer";
import { tableInformationReducer } from "./tableInformationState/tableInformationReducer";

export const rootReducer = combineReducers({
    authorizationReducer,
    tableInformationReducer
});