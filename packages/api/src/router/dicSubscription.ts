import { z } from "zod"

import { prisma, type SubscribedDics } from "@wordigo/db"

import messages from "../../../common/constants/messages"
import { errorResult, successResult } from "../../../common/constants/results"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"

export const dicSubscriptionRouter = createTRPCRouter({
    subscribe: protectedProcedure
        .input(
            z.object({
                dictionaryId: z.string(),
            }),
        )
        .mutation(async ({ input, ctx }) => {
            const { dictionaryId } = input
            const { user } = ctx

            const dictionary = await prisma.dictionaries.findFirst({
                where: {
                    id: dictionaryId
                }
            })

            if (!dictionary)
                return errorResult<boolean>(false, messages.dictionary_not_found)

            if (dictionary.authorId === user?.id)
                return errorResult<boolean>(false, messages.subscription_own_dic)

            await prisma.dictionaries.update({
                where: {
                    id: dictionaryId
                },
                data: {
                    subscribers: dictionary.subscribers + 1
                }
            })

            await prisma.subscribedDics.create({
                data: {
                    dictionaryId,
                    profileId: user?.id
                },
            })

            return successResult<boolean>(true, messages.success)
        }),

    getSubscribedDicList: publicProcedure.query(async () => {
        const subs = (await prisma.subscribedDics.findMany()) as []

        return successResult<SubscribedDics[]>(subs, messages.success)
    }),
})
