import { RootState } from "../store"

export const selectTableInformation = (store: RootState) => store.tableInformationReducer.tableInfo;