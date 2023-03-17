import { combineReducers } from "redux";
import { userReducer } from "./user";
import { categoriesReducer } from "./categories";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
})