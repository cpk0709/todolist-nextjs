import { getTodo, postTodo } from ".";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useQueryTodo = () => {
  return useQuery(["todo"], getTodo);
};

export const useMutateAddTodo = () => {
  return useMutation(postTodo, {
    onSuccess: () => {
      console.log("success!");
      queryClient.invalidateQueries("todo");
    },
  });
};
