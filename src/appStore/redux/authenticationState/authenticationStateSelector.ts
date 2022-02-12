import { RootState } from "../store"

export const selectAuthorizationState = (store: RootState) => store.authorizationReducer.isAuthorize;

export const selectUserData = (store: RootState) => store.authorizationReducer.userData;