// import { useAppDispatch } from "../feature/configureStore";
import { Box, Button, Text } from "@chakra-ui/react";
import { useQueryTodo } from "../api/todo/todo-hooks";
import { ColorSchema } from "../utils/color";

const Todo = () => {
  // const appDispatch = useAppDispatch();
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
              <Text>{todo.todo}</Text>
              <Button bg={ColorSchema.key}>완료</Button>
            </Box>
          );
        })}
    </div>
  );
};

export default Todo;
