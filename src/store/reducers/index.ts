import { combineReducers } from "redux";
import { goodReducer } from "./goodReducer";
export const rootReducer = combineReducers({
  goods: goodReducer,
});

export type RootState = ReturnType<typeof rootReducer>;