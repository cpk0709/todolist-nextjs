import { useState } from "react";
import { useAppDispatch } from "../../feature/configureStore";
import { fetchAddTodo } from "../../feature/modules/todoSlice";
import Todo from "../../components/Todo";
import { Box } from "@chakra-ui/react";

const TodoListPage = () => {
  const appDispatch = useAppDispatch();

  // const [todo, setTodo] = useState("");

  const [todoForm, setTodoForm] = useState({
    title: "",
    content: "",
  });

  const { title, content } = todoForm;

  // const getAddTodoForm = (e) => {
  //   setTodo(e.target.value);
  // };

  const onChange = (e) => {
    console.log("!");
    console.log(e.target.value);
    console.log(e.target.name);
    const nextForm = {
      ...todoForm,
      [e.target.name]: e.target.value,
    };
    setTodoForm(nextForm);
  };

  const handleAddTodo = () => {
    if (!todoForm.title && !todoForm.content) return;
    appDispatch(fetchAddTodo(todoForm));
    // setTodo("");
    setTodoForm({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <h1>The Todo List Page</h1>
      <hr />
      <Box mb="20px">
        <input
          type="text"
          name="title"
          placeholder="제목 입력"
          value={title}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="내용 입력"
          value={content}
          onChange={onChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </Box>
      <hr />
      <Todo />
    </div>
  );
};

export default TodoListPage;
