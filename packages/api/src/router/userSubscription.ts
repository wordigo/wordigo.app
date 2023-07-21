import { z } from "zod"

import { prisma, type SubscribedUsers } from "@wordigo/db"

import messages from "../../../common/constants/messages"
import { successResult } from "../../../common/constants/results"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const userSubscriptionRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const { email } = input

      await prisma.subscribedUsers.create({
        data: {
          email,
        },
      })

      return successResult<boolean>(true, messages.success)
    }),

  getSubscribersList: publicProcedure.query(async () => {
    const subs = (await prisma.subscribedUsers.findMany()) as []

    return successResult<SubscribedUsers[]>(subs, messages.success)
  }),
})
