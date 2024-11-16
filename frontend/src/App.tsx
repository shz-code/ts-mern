import { trpc } from "./trpc";

function App() {
  const { data, isLoading } = trpc.getUsers.useQuery();

  return (
    <>
      <div>{isLoading ? "Loading..." : data?.message}</div>
    </>
  );
}

export default App;
