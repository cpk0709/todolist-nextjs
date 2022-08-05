import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [
    {
      id: 0,
      todo: "test0",
      status: false,
    },
    {
      id: 1,
      todo: "test1",
      status: false,
    },
    {
      id: 2,
      todo: "test2",
      status: false,
    },
    {
      id: 3,
      todo: "test3",
      status: false,
    },
    {
      id: 4,
      todo: "test4",
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
      addTodo({ id: Math.random(), todo: data, status: false })
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
          todo: action.payload.todo,
          status: action.payload.status,
        },
      ];
      return { list: new_todoList };
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
