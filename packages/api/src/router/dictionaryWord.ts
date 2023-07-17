import { z } from "zod"

import { prisma } from "@wordigo/db"

import messages from "../../../common/constants/messages"
import { errorResult, successResult } from "../../../common/constants/results"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const dictionaryWordRouter = createTRPCRouter({
  removeWordFromDic: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
        wordId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id
      const { wordId, dictionaryId } = input

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: userId, id: dictionaryId },
      })

      if (!dictionary) {
        return errorResult<boolean>(false, messages.dictionary_not_found)
      }

      const word = await prisma.words.findFirst({
        where: { id: wordId },
      })

      if (!word) {
        return errorResult<boolean>(false, messages.word_not_found)
      }

      const userWord = await prisma.userWords.findFirst({
        where: { word, authorId: userId },
      })

      if (!userWord) {
        return errorResult<boolean>(false, messages.userWord_not_found)
      }

      await prisma.dictAndUserWords.delete({
        where: { userWordId_dictionaryId: { dictionaryId, userWordId: userWord.id } },
      })

      return successResult<boolean>(true, messages.success)
    }),

  addWordToDic: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
        wordId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id
      const { wordId, dictionaryId } = input

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: userId, id: dictionaryId },
      })

      if (!dictionary) {
        return errorResult<boolean>(false, messages.dictionary_not_found)
      }

      const word = await prisma.words.findFirst({
        where: { id: wordId },
      })

      if (!word) {
        return errorResult<boolean>(false, messages.word_not_found)
      }

      const userWord = await prisma.userWords.findFirst({
        where: { word, authorId: userId },
      })

      const dictUserWord = {
        dictionaryId: dictionary.id,
        userWordId: "",
      }

      if (!userWord) {
        const newUserWord = await prisma.userWords.create({
          data: {
            wordId,
            authorId: userId,
          },
        })
        dictUserWord.userWordId = newUserWord.id
      } else {
        dictUserWord.userWordId = userWord.id
      }

      await prisma.dictAndUserWords.create({
        data: dictUserWord,
      })

      return successResult<boolean>(true, messages.success)
    }),
})
