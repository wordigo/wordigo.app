import { Translate } from "@google-cloud/translate/build/src/v2"
import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

const translate = new Translate({ projectId: process.env.CLOUD_TRANSLATE_PROJECT_ID, key: process.env.CLOUD_TRANSLATE_API_KEY })

export const translationRouter = createTRPCRouter({

  translate: publicProcedure
    .input(z.object({
      query: z.string(),
      sourceLanguage: z.string(),
      targetLanguage: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
      console.log("ctx", ctx.user)

      const { sourceLanguage, targetLanguage, query } = input
      const [response, { data }] = await translate.translate(query, { from: sourceLanguage, to: targetLanguage })
      const translatedText = data.translations[0].translatedText

      return {
        success: true,
        translatedText,
        sourceLanguage,
        targetLanguage
      }
    }),
})