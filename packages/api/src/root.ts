import { authRouter } from "./router/auth"
import { dictionaryRouter } from './router/dictionary'
import { dictionaryWordRouter } from './router/dictionaryWord'
import { translationRouter } from "./router/translation"
import { wordRouter } from './router/word'
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  auth: authRouter,
  translation: translationRouter,
  dictionary: dictionaryRouter,
  dictionaryWord: dictionaryWordRouter,
  word: wordRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
