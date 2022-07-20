import type { RootState } from "../store";

export const authStatus = (state: RootState) => state.auth.status;
export const authError = (state: RootState) => state.auth.err;
