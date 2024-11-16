import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "./AppRouter";

// Create a tRPC client instance
export const trpc = createTRPCReact<AppRouter>();
