import { authRouter } from "./router/auth"
import { dictionaryRouter } from "./router/dictionary"
import { dictionaryWordRouter } from "./router/dictionaryWord"
import { subscribeRouter } from './router/subscribe'
import { translationRouter } from "./router/translation"
import { userRouter } from './router/user'
import { userWordRouter } from "./router/userWord"
import { wordRouter } from "./router/word"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  auth: authRouter,
  translation: translationRouter,
  dictionary: dictionaryRouter,
  dictionaryWord: dictionaryWordRouter,
  word: wordRouter,
  userWord: userWordRouter,
  subscribe: subscribeRouter,
  user: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
