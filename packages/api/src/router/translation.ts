import { Translate } from "@google-cloud/translate/build/src/v2";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const translate = new Translate({ projectId: process.env.CLOUD_TRANSLATE_PROJECT_ID, key: process.env.CLOUD_TRANSLATE_API_KEY });

export interface ITranslateOptions {
  to?: string;
  from?: string;
}

export const translationRouter = createTRPCRouter({
  translate: publicProcedure
    .input(
      z.object({
        query: z.string(),
        sourceLanguage: z.string().nullable(),
        targetLanguage: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { sourceLanguage, targetLanguage, query } = input;
      const translateOptions: ITranslateOptions = {
        to: input.targetLanguage,
      };
      if (input.sourceLanguage) translateOptions.from = input.sourceLanguage;
      const [response, { data }] = await translate.translate(query, translateOptions);

      const { translatedText, detectedSourceLanguage } = data.translations[0];

      return {
        success: true,
        translatedText,
        sourceLanguage: sourceLanguage || detectedSourceLanguage,
        targetLanguage,
      };
    }),
});
