import { RootState } from "../store"

export const selectMatch = (store: RootState): Array<{ [key: string]: string | number }> | null => store.matchReducer.match;