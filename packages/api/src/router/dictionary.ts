import { z } from "zod";

import { prisma } from "@wordigo/db";

import messages from "../../../common/constants/messages";
import { errorResult, successResult } from "../../../common/constants/results";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const dictionaryRouter = createTRPCRouter({
  //getUserDictionaryList
  getUserDictionaries: protectedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.user;
    const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } });

    return successResult(dictionaries, messages.success);
  }),

  //getUserDictionary Mutation
  getUserDictionariesMutation: protectedProcedure.mutation(async ({ ctx }) => {
    const { id } = ctx.user;
    const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } });

    return successResult(dictionaries, messages.success);
  }),

  //getDictionaryWords
  getDictionaryWords: protectedProcedure
    .input(
      z.object({
        dictionaryId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { id } = ctx.user;

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
      });

      if (!dictionary) return errorResult(null, messages.dictionary_not_found);

      const responseData = {
        dictionary,
        numberOfWords: dictionary.UserWords.length,
      };
      return successResult(responseData, messages.success);
    }),

  addDictionary: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        published: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title, published } = input;
      const userId = ctx.user.id;

      await prisma.dictionaries.create({
        data: {
          title: title,
          authorId: userId,
          published,
        },
      });

      return successResult(null, messages.success);
    }),

  deleteDictionary: protectedProcedure
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
        return errorResult(null, messages.dictionary_not_found);
      }

      await prisma.dictionaries.delete({
        where: { id: dictionaryId },
      });

      return successResult(null, messages.success);
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
      const userId = ctx.user.id;
      const { dictionaryId, title, published } = input;

      const dictionary = await prisma.dictionaries.findFirst({
        where: { authorId: userId, id: dictionaryId },
      });

      if (!dictionary) {
        return errorResult(null, messages.dictionary_not_found);
      }

      await prisma.dictionaries.update({
        where: { id: dictionaryId },
        data: { title, published },
      });

      return successResult(null, messages.success);
    }),
});
