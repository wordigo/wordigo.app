import { Translate } from "@google-cloud/translate/build/src/v2"
import { prisma } from '@wordigo/db'
import { z } from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

const translate = new Translate({ projectId: process.env.CLOUD_TRANSLATE_PROJECT_ID, key: process.env.CLOUD_TRANSLATE_API_KEY })

export const translationRouter = createTRPCRouter({

  translate: publicProcedure
    .input(z.object({
      query: z.string(),
      sourceLanguage: z.string(),
      targetLanguage: z.string()
    }))
    .mutation(async ({ ctx, input }) => {

      const { sourceLanguage, targetLanguage, query } = input
      const [response, { data }] = await translate.translate(query, { from: sourceLanguage, to: targetLanguage })
      const translatedText = data.translations[0].translatedText
      console.log(ctx.user)
      return {
        success: true,
        translatedText,
        sourceLanguage,
        targetLanguage
      }
    }),

  getUserDictionaries: protectedProcedure
    .query(async ({ ctx }) => {
      const { id } = ctx.user
      const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } })

      return {
        success: true,
        dictionaries
      }
    }),

  // getDictionaryWords: protectedProcedure
  //   .input(z.object({
  //     dictionaryId: z.string()
  //   }))
  //   .query(async ({ input, ctx }) => {
  //     const { id } = ctx.user
  //     const dictionary = await prisma.dictionaries.findFirst({
  //       where: { authorId: id, id: input.dictionaryId },
  //       include: { UserWords: true }
  //     })
  //     if (!dictionary)
  //       return {
  //         success: false,
  //         dictionary: null
  //       }

  //     return {
  //       success: true,
  //       dictionary
  //     }
  //   }),

  addDictionary: protectedProcedure
    .input(z.object({
      title: z.string()
    }))
    .mutation(async ({ ctx, input }) => {

      const dictionary = {
        title: input.title,
        published: true,
        authorId: ctx.user.id
      }

      await prisma.dictionaries.create({
        data: dictionary
      })
    })
})