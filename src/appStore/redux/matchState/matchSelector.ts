import { RootState } from "../store"

export const selectMatch = (store: RootState): Array<{ [key: string]: string }> | null => store.matchReducer.match;