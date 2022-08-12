import { getTodo, postTodo } from ".";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useQueryTodo = () => {
  return useQuery(["todo"], getTodo);
};

export const useMutateAddTodo = (options) => {
  return useMutation(postTodo, options);
};
