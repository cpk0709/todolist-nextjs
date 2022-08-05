import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function HomePage() {
  const router = useRouter();

  const handleMoveListPage = () => {
    router.push("/todo-list");
  };

  return (
    <Box>
      <Box>
        <h1>Home</h1>
        <button onClick={handleMoveListPage}>MOVE To Todo List</button>
      </Box>
      <ReactQueryDevtools />
    </Box>
  );
}
