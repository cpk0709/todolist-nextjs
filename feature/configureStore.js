import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./modules/todoSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export const store = configureStore({
  reducer: {
    todo: rootReducer,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
