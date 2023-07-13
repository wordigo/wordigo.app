import { z } from "zod"

import { prisma } from "@wordigo/db"

import { createTRPCRouter, protectedProcedure } from "../trpc"

export const dictionaryRouter = createTRPCRouter({
  //getUserDictionaryList
  getUserDictionaries: protectedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.user
    const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } })

    return {
      success: true,
      message: "success",
      data: dictionaries,
    }
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

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: id, id: input.dictionaryId },
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

      if (!dictionary)
        return {
          success: false,
          message: "Dictionary Not Found!",
          data: null,
        }

      const responseData = {
        dictionary,
        numberOfWords: dictionary.UserWords.length,
      }

      return {
        success: true,
        data: responseData,
        message: "Success",
      }
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

      return {
        success: true,
        message: "Success",
      }
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
        return {
          success: false,
          message: "Dictionary Couldn't Found!",
        }
      }

      await prisma.dictionaries.delete({
        where: { id: dictionaryId },
      })

      return {
        success: true,
        message: "Dictionary Deleted Successfully",
      }
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
        return {
          success: false,
          message: "Dictionary Couldn't Found!",
        }
      }

      await prisma.dictionaries.update({
        where: { id: dictionaryId },
        data: { title, published },
      })

      return {
        success: true,
        message: "Dictionary Updated Successfully",
      }
    }),
})
