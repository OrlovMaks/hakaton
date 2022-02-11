import { RootState } from "../store";

export const isUserSignSelector = (state: RootState) => state.signReducer.isUserSign;
export const userData = (state: RootState) => state.signReducer.userData;