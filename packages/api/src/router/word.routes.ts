import { z } from "zod";

import { prisma } from "@wordigo/db";

import { DictionaryInitialTitle, LearningStatuses } from "../../../common/constants/index";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const wordRouter = createTRPCRouter({
  addWord: protectedProcedure
    .input(
      z.object({
        text: z.string(),
        translatedText: z.string(),
        nativeLanguage: z.string(),
        targetLanguage: z.string(),
        dictionaryId: z.string().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { text, translatedText, nativeLanguage, targetLanguage } = input;
      let { dictionaryId } = input;
      const userId = ctx.user.id;

      const word = await prisma.words.create({
        data: {
          text,
          translatedText,
          nativeLanguage,
          targetLanguage,
        },
      });

      const userWord = await prisma.userWords.create({
        data: {
          wordId: word.id,
          learningStatus: LearningStatuses["Not Learned"],
          authorId: userId,
        },
      });

      if (!dictionaryId) {
        const dic = await prisma.dictionaries.findFirst({
          where: {
            title: DictionaryInitialTitle,
          },
        });
        dictionaryId = dic?.id as string;
      }

      await prisma.dictAndUserWords.create({
        data: {
          userWordId: userWord.id,
          dictionaryId,
        },
      });

      return {
        success: true,
        message: "Success",
      };
    }),

  deleteWord: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.user.id;
      const { dictionaryId } = input;

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: userId, id: dictionaryId },
      });

      if (!dictionary) {
        return {
          success: false,
          message: "Dictionary Couldn't Found!",
        };
      }

      await prisma.dictionaries.delete({
        where: { id: dictionaryId },
      });

      return {
        success: true,
        message: "Dictionary Deleted Successfully",
      };
    }),

  // updateWord: protectedProcedure
  //   .input(
  // )
  //   .mutation(async ({ ctx, input }) => {
  //   }),
});
