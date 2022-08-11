import { useState } from "react";
import { useAppDispatch } from "../../feature/configureStore";
import { fetchAddTodo } from "../../feature/modules/todoSlice";
import Todo from "../../components/Todo";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const TodoListPage = () => {
  const appDispatch = useAppDispatch();

  const [todo, setTodo] = useState("");

  const getAddTodoForm = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (!todo) return;
    appDispatch(fetchAddTodo(todo));
    setTodo("");
  };

  const addTodoLostAxios = async () => {
    axios.post("http://localhost:3001/list", {
      id: Math.random(),
      todo: todo,
      status: false,
    });
  };

  const addTodo = useMutation((todo) =>
    axios.post("http://localhost:3001/list", todo)
  );

  const handleAddTodoAxios = () => {
    addTodo.mutate({
      id: Math.random(),
      todo: todo,
      status: false,
    });
  };

  return (
    <div>
      <h1>The Todo List Page</h1>
      <hr />
      <Box mb="20px">
        <input
          type="text"
          placeholder="Todo 입력"
          value={todo}
          onChange={getAddTodoForm}
        />
        <button onClick={handleAddTodoAxios}>Add Todo</button>
      </Box>
      <hr />
      <Todo />
    </div>
  );
};

export default TodoListPage;
