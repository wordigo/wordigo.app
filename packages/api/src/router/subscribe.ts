import { z } from "zod"

import { prisma, type Subscribers } from "@wordigo/db"

import messages from "../../../common/constants/messages"
import { successResult } from "../../../common/constants/results"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const subscribeRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email } = input

      await prisma.subscribers.create({
        data: {
          email,
        },
      })

      return successResult<boolean>(true, messages.success)
    }),

  getSubscribersList: publicProcedure.query(async () => {
    const subs = (await prisma.subscribers.findMany()) as []

    return successResult<Subscribers[]>(subs, messages.success)
  }),
})
