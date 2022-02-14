import { combineReducers } from "redux"
import { authorizationReducer } from "./authenticationState/authorizationStateReducer";
import { matchReducer } from "./matchState/matchReducer";
import { tableInformationReducer } from "./tableInformationState/tableInformationReducer";

export const rootReducer = combineReducers({
    authorizationReducer,
    tableInformationReducer,
    matchReducer
});