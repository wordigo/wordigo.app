import { prisma } from '@wordigo/db'
import { z } from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const dictionaryWordRouter = createTRPCRouter({

    removeWordFromDic: protectedProcedure
        .input(z.object({
            dictionaryId: z.string(),
            wordId: z.string()
        }))
        .mutation(async ({ ctx, input }) => {

            const userId = ctx.user.id
            const { wordId, dictionaryId } = input

            const dictionary = await prisma.dictionaries.findFirst({
                where: { authorId: userId, id: dictionaryId }
            })

            if (!dictionary) {
                return {
                    success: false,
                    message: 'Dictionary Not Found!'
                }
            }

            const word = await prisma.words.findFirst({
                where: { id: wordId }
            })

            if (!word) {
                return {
                    success: false,
                    message: 'Word Not Found!'
                }
            }

            const userWord = await prisma.userWords.findFirst({
                where: { word, authorId: userId }
            })

            if (!userWord) {
                return {
                    success: false,
                    message: 'UserWord Not Found!'
                }
            }

            await prisma.dictAndUserWords.delete({
                where: { userWordId_dictionaryId: { dictionaryId, userWordId: userWord.id } }
            })

            return {
                success: true,
                message: 'success'
            }
        })
})