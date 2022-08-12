import { instance } from "../config";

export const postTodo = async (todo) => {
  const { data } = await instance.post("/list", todo);
  return data;
};
