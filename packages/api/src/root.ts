import { authRouter } from "./router/auth"
import { translationRouter } from "./router/translation"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  auth: authRouter,
  translation: translationRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
