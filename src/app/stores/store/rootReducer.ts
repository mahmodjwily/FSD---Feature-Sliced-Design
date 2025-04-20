import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user/model";
import { articleReducer } from "@/entities/article/model";

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});
