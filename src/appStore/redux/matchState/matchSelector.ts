import { RootState } from "../store"

export const selectMatch = (store: RootState) => store.matchReducer.match;