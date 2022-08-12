// import { useState } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import Todo from "../../components/Todo";
// import { Box } from "@chakra-ui/react";
// import { useMutateAddTodo } from "../../api/todo/todo-hooks";

// const TodoListPage = () => {
//   const queryClient = useQueryClient();

//   const { mutate: addTodoMutate } = useMutateAddTodo({
//     onSuccess: () => {
//       console.log("success!");
//       queryClient.invalidateQueries("todo");
//       setTodo("");
//     },
//     onError: (error) => {
//       console.log(error.message);
//       console.log(error);
//     },
//   });

//   const [todo, setTodo] = useState("");

//   const getAddTodoForm = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleAddTodoAxios = () => {
//     if (!todo) {
//       alert("Todo를 입력해주세요");
//       return;
//     }
//     addTodoMutate({
//       id: Math.random(),
//       todo: todo,
//       status: false,
//     });
//   };

//   return (
//     <div>
//       <h1>The Todo List Page</h1>
//       <hr />
//       <Box mb="20px">
//         <input
//           type="text"
//           placeholder="Todo 입력"
//           value={todo}
//           onChange={getAddTodoForm}
//         />
//         <button onClick={handleAddTodoAxios}>Add Todo</button>
//       </Box>
//       <hr />
//       <Todo />
//     </div>
//   );
// };

// export default TodoListPage;
export { default } from "../../containers/todo-list";
