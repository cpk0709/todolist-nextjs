import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todoId: 0,
  todoTitle: "",
  todoContent: "",
  status: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
