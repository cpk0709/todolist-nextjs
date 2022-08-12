import TodoList from "./TodoList";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMutateAddTodo } from "../../api/todo/todo-hooks";
import styles from "./Todolist.module.scss";

const TodoListContainer = () => {
  const queryClient = useQueryClient();

  const { mutate: addTodoMutate } = useMutateAddTodo({
    onSuccess: () => {
      console.log("success!!");
      queryClient.invalidateQueries("todo");
      setTodo("");
    },
    onError: (error) => {
      console.log(error.message);
      console.log(error);
    },
  });

  const [todo, setTodo] = useState("");

  const setTodoForm = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodoFetch = () => {
    if (!todo) {
      alert("Todo를 입력해주세요");
      return;
    }
    addTodoMutate({
      id: Math.random(),
      todo: todo,
      status: false,
    });
  };

  return (
    <>
      <TodoList
        todo={todo}
        setTodoForm={setTodoForm}
        handleAddTodoFetch={handleAddTodoFetch}
      />
      <div className={styles.body}>TEST</div>
    </>
  );
};

export default TodoListContainer;
