import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./modules/todoSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
