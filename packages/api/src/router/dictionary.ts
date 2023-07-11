import { z } from "zod";

import { prisma } from "@wordigo/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const dictionaryRouter = createTRPCRouter({
  //getUserDictionaryList
  getUserDictionaries: protectedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.user;
    const dictionaries = await prisma.dictionaries.findMany({ where: { authorId: id } });

    return {
      success: true,
      message: "success",
      data: dictionaries,
    };
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

      if (!dictionary)
        return {
          success: false,
          message: "Dictionary Not Found!",
          data: null,
        };

      return {
        success: true,
        data: dictionary,
        message: "success",
      };
    }),

  addDictionary: protectedProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const dictionary = {
        title: input.title,
        authorId: ctx.user.id,
      };

      await prisma.dictionaries.create({
        data: dictionary,
      });

      return {
        success: true,
        message: "success",
      };
    }),
});
