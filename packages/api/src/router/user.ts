
import { prisma } from "@wordigo/db"

import { z } from 'zod'
import messages from '../../../common/constants/messages'
import { errorResult, successResult } from '../../../common/constants/results'
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

export const userRouter = createTRPCRouter({
  publicDicsUsers: publicProcedure
    .query(async () => {
      const publicDictionaries = await prisma.dictionaries
        .findMany({ where: { published: true }, include: { author: true } })

      const users = publicDictionaries

    }),

  delete: protectedProcedure
    .input(z.object({
      userId: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = input

      const userFromDb = await prisma.profiles.findFirst({ where: { id: userId } })
      if (!userFromDb) {
        return errorResult<boolean>(null, messages.user_not_found)
      }

      await prisma.profiles.delete({ where: { id: userId } })

    }),

  update: protectedProcedure
    .input(z.object({
      username: z.string().nullable(),
      name: z.string().nullable(),
      avatar_url: z.string().nullable(),
      nativeLanguage: z.string().nullable(),
      targetLanguage: z.string().nullable()
    }))
    .mutation(async ({ ctx, input }) => {
      const { username, name, avatar_url, nativeLanguage, targetLanguage } = input
      const { user } = ctx

      const profile = await prisma.profiles.findFirst({ where: { id: user.id } })
      if (!profile)
        return errorResult<boolean>(false, messages.user_not_found)

      await prisma.profiles.update({
        where: { id: profile.id },
        data: {
          username: username === null || '' ? profile.username : username,
          name: name === null || '' ? profile.name : name,
          avatar_url: avatar_url === null || '' ? profile.avatar_url : avatar_url,
          nativeLanguage: nativeLanguage === null || '' ? profile.nativeLanguage : nativeLanguage,
          targetLanguage: targetLanguage === null || '' ? profile.targetLanguage : targetLanguage
        }
      })

      return successResult<boolean>(true, messages.success)

    })

})