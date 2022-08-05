import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../feature/configureStore";
import { fetchGetTodoList } from "../feature/modules/todoSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Todo = () => {
  const appDispatch = useAppDispatch();
  const todoList = useSelector((store) => store.todo.todo.list);

  // useEffect(() => {
  //   appDispatch(fetchGetTodoList());
  // }, [appDispatch]);

  // const { data } = useQuery(["todo"], appDispatch(fetchGetTodoList()));
  // console.log(data);

  const getTodoListAxios = async () => {
    const { data } = await axios.get("http://localhost:3001/list");
    return data;
  };

  const { data, isLoading } = useQuery(["todo"], getTodoListAxios);
  console.log(data);
  console.log(isLoading);

  return (
    <div>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.todo}</div>;
      })}
    </div>
  );
};

export default Todo;
