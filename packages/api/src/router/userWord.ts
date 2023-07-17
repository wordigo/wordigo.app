import { z } from "zod";

import { prisma } from "@wordigo/db";

import messages from "../../../common/constants/messages";
import { errorResult, successResult } from "../../../common/constants/results";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userWordRouter = createTRPCRouter({
  removeUserWord: protectedProcedure
    .input(
      z.object({
        wordId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { wordId } = input;
      const userId = ctx.user.id;

      const userWord = await prisma.userWords.findFirst({
        where: {
          wordId,
          authorId: userId,
        },
      });

      if (!userWord) {
        return errorResult(null, messages.userWord_not_found);
      }

      await prisma.userWords.delete({
        where: {
          id: userWord.id,
        },
      });

      return successResult(null, messages.success);
    }),
});
