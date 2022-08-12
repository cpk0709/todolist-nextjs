import { instance } from "../config";

export const getTodo = async () => {
  const { data } = await instance.get("http://localhost:3001/list");
  return data;
};

export const postTodo = async (todo) => {
  const { data } = await instance.post("/list", todo);
  return data;
};
