import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../feature/configureStore";
import { fetchGetTodoList } from "../feature/modules/todoSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { useQueryTodo } from "../api/todo/todo-hooks";

const Todo = () => {
  const appDispatch = useAppDispatch();
  // const todoList = useSelector((store) => store.todo.todo.list);

  // useEffect(() => {
  //   appDispatch(fetchGetTodoList());
  // }, [appDispatch]);

  // const { data } = useQuery(["todo"], appDispatch(fetchGetTodoList()));
  // console.log(data);

  ///////
  // const getTodoListAxios = async () => {
  //   const { data } = await axios.get("http://localhost:3001/list");
  //   return data;
  // };

  // const { data, isLoading } = useQuery(["todo"], getTodoListAxios);
  //////

  const { data, isLoading } = useQueryTodo();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data &&
        data.map((todo) => {
          return (
            <Box m="12px" p="35px" bg="lightgrey" key={todo.id}>
              {todo.todo}
            </Box>
          );
        })}
    </div>
  );
};

export default Todo;
