
import { prisma } from "@wordigo/db"

import { z } from 'zod'
import { AllCountryLanguages } from '../../../common'
import messages from '../../../common/constants/messages'
import { errorResult, successResult } from '../../../common/constants/results'
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

import supabase from '../../../../apps/next/src/libs/supabase/client'

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

      if (!userFromDb) return errorResult<boolean>(null, messages.user_not_found)

      if (userId !== ctx.user.id) return errorResult<boolean>(false, messages.forbidden)

      const { error } = await supabase.auth.admin.deleteUser(userId)

      if (error) return errorResult<boolean>(false, messages.error)

      await prisma.profiles.delete({ where: { id: userId } })

      return successResult<boolean>(true, messages.success)
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

      if (nativeLanguage !== null && nativeLanguage !== '') {
        const doNativeLangExist = AllCountryLanguages.filter(lang => {
          return lang.code.toLowerCase() === nativeLanguage?.trim().toLowerCase()
        })

        if (doNativeLangExist.length === 0)
          return errorResult<boolean>(false, messages.language_not_found)
      } else if (targetLanguage !== null && targetLanguage !== '') {
        const doTargetLangExist = AllCountryLanguages.filter(lang => {
          return lang.code.toLowerCase() === targetLanguage?.trim().toLowerCase()
        })

        if (doTargetLangExist.length === 0)
          return errorResult<boolean>(false, messages.language_not_found)
      }

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