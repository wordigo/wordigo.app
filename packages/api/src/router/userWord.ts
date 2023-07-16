import { z } from "zod"


import { prisma } from "@wordigo/db"
import { createTRPCRouter, protectedProcedure } from "../trpc"


export const userWordRouter = createTRPCRouter({
    removeUserWord: protectedProcedure
        .input(
            z.object({
                wordId: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const { wordId } = input
            const userId = ctx.user.id

            const userWord = await prisma.userWords.findFirst({
                where: {
                    wordId,
                    authorId: userId
                }
            })

            if (!userWord) {
                return {
                    data: null,
                    success: false,
                    message: "UserWord Couldn't Found!"
                }
            }

            await prisma.userWords.delete({
                where: {
                    id: userWord.id
                }
            })

            return {
                data: null,
                success: true,
                message: 'Success'
            }
        }),


})
