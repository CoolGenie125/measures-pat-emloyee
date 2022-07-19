import type { RootState } from "../store";

export const smallCategory = (state: RootState) => state.category.small;
export const bigCategory = (state: RootState) => state.category.big;
