import { z } from "zod"

import { prisma, type Dictionaries } from "@wordigo/db"

import messages from "../../../common/constants/messages"
import { errorResult, successResult } from "../../../common/constants/results"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const dictionaryRouter = createTRPCRouter({
  //getUserDictionaryList
  getUserDictionaries: protectedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.user
    const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } })

    return successResult<Dictionaries[]>(dictionaries, messages.success)
  }),

  getPublicDictionaryList: protectedProcedure.query(async () => {
    const dictionaries = await prisma.dictionaries.findMany({ where: { published: true } })

    return successResult<Dictionaries[]>(dictionaries, messages.success)
  }),

  //getUserDictionary Mutation
  getUserDictionariesMutation: protectedProcedure.mutation(async ({ ctx }) => {
    const { id } = ctx.user
    const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } })

    return successResult<Dictionaries[]>(dictionaries, messages.success)
  }),

  //getDictionaryWords
  getDictionaryWords: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { id } = ctx.user
      const { dictionaryId } = input

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: id, id: dictionaryId },
        include: {
          UserWords: {
            include: {
              userWord: {
                include: {
                  word: true,
                },
              },
            },
          },
        },
      })

      const words = [] as any
      dictionary?.UserWords.map(w => {
        words.push(w.userWord)
      })

      const responseData = {
        words,
        numberOfWords: dictionary?.UserWords.length,
      }

      if (!dictionary)
        return errorResult<typeof responseData>(null, messages.dictionary_not_found)

      return successResult<typeof responseData>(responseData, messages.success)
    }),

  addDictionary: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        published: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title, published } = input
      const userId = ctx.user.id

      await prisma.dictionaries.create({
        data: {
          title: title,
          authorId: userId,
          published,
        },
      })

      return successResult<boolean>(false, messages.success)
    }),

  deleteDictionary: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id
      const { dictionaryId } = input

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: userId, id: dictionaryId },
      })

      if (!dictionary) {
        return errorResult<boolean>(false, messages.dictionary_not_found)
      }

      await prisma.dictionaries.delete({
        where: { id: dictionaryId },
      })

      return successResult<boolean>(true, messages.success)
    }),

  updateDictionary: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
        title: z.string(),
        published: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id
      const { dictionaryId, title, published } = input

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: userId, id: dictionaryId },
      })

      if (!dictionary) {
        return errorResult<boolean>(false, messages.dictionary_not_found)
      }

      await prisma.dictionaries.update({
        where: { id: dictionaryId },
        data: { title, published },
      })

      return successResult<boolean>(true, messages.success)
    }),
})
