import { RootState } from "../store"

export const selectTableInformation = (store: RootState) => store.tableInformationReducer.tableInfo;
export const selectMatch = (store: RootState) => store.tableInformationReducer.match;