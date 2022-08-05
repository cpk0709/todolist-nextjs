import { useSelector } from "react-redux";

const Todo = () => {
  const todoList = useSelector((store) => store.todo.todo.list);

  return (
    <div>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.todo}</div>;
      })}
    </div>
  );
};

export default Todo;
