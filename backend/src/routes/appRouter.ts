import { procedure, router } from "../utils/trpc";

export const appRouter = router({
  getUsers: procedure.query(async () => {
    return { message: "Welcome user to this boilerplate template" };
  }),
});

// Export the type of the router for the client
export type AppRouter = typeof appRouter;
