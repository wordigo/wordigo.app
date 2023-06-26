import { authRouter } from "./router/auth"
import { postRouter } from "./router/post"
import { translationRouter } from "./router/translation"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  translation: translationRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
