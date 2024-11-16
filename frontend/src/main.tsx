import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/style.css";
import { trpc } from "./trpc/index.ts";

// Create a Query Client instance
const queryClient = new QueryClient();

// Create a tRPC client
const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: "http://localhost:5000/trpc" })],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </StrictMode>
);
