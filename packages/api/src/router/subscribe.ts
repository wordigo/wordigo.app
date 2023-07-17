import { z } from "zod";

import { prisma } from "@wordigo/db";

import messages from "../../../common/constants/messages";
import { successResult } from "../../../common/constants/results";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const subscribeRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email } = input;

      await prisma.subscribers.create({
        data: {
          email,
        },
      });

      return successResult(null, messages.success);
    }),

  getSubscribersList: publicProcedure.query(async () => {
    const subs = (await prisma.subscribers.findMany()) as [];

    return successResult(subs, messages.success);
  }),
});
