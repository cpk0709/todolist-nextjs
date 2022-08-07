import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [
    {
      id: 0,
      title: "testTitle0",
      content: "testContent0",
      status: false,
    },
  ],
};

export const fetchGetTodoList = createAsyncThunk(
  "todo/fetchGetTodoList",
  async () => {
    return axios
      .get("http://localhost:3001/list")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }
);

export const fetchAddTodo = createAsyncThunk(
  "todo/fetchAddTodo",
  (data, thunkAPI) => {
    thunkAPI.dispatch(
      addTodo({
        id: Math.random(),
        title: data.title,
        content: data.content,
        status: false,
      })
    );
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const new_todoList = [
        ...state.list,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
          status: action.payload.status,
        },
      ];
      return { list: new_todoList };
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
