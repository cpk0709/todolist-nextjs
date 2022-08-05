import { useState } from "react";
import { useAppDispatch } from "../../feature/configureStore";
import { fetchAddTodo } from "../../feature/modules/todoSlice";

const TodoListPage = () => {
  const appDispatch = useAppDispatch();

  const [todo, setTodo] = useState("");

  const getAddTodoForm = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    appDispatch(fetchAddTodo());
  };

  return (
    <div>
      <h1>The Todo List Page</h1>
      <hr />
      <input type="text" placeholder="Todo 입력" onChange={getAddTodoForm} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoListPage;
