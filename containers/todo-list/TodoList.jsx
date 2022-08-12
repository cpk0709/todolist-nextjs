import { Box } from "@chakra-ui/react";
import Todo from "../../components/Todo";

const TodoList = ({ todo, setTodoForm, handleAddTodoFetch }) => {
  return (
    <div>
      <h1>The Todo List Page</h1>
      <hr />
      <Box mb="20px">
        <input
          type="text"
          placeholder="Todo 입력"
          value={todo}
          onChange={setTodoForm}
        />
        <button onClick={handleAddTodoFetch}>Add Todo</button>
      </Box>
      <hr />
      <Todo />
    </div>
  );
};

export default TodoList;
