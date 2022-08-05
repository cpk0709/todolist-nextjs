import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 0,
      todo: "",
      status: "",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const new_todoList = [
        ...state.list,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          status: action.status,
        },
      ];
      return { list: new_todoList };
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
