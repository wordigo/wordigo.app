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
                    message: "Dictionary Couldn't Found!"
                }
            }

            const word = await prisma.words.findFirst({
                where: { id: wordId }
            })

            if (!word) {
                return {
                    success: false,
                    message: "Word Couldn't Found!"
                }
            }

            const userWord = await prisma.userWords.findFirst({
                where: { word, authorId: userId }
            })

            if (!userWord) {
                return {
                    success: false,
                    message: "UserWord Couldn't Found!"
                }
            }

            await prisma.dictAndUserWords.delete({
                where: { userWordId_dictionaryId: { dictionaryId, userWordId: userWord.id } }
            })

            return {
                success: true,
                message: 'Success'
            }
        }),

    addWordToDic: protectedProcedure
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
                    message: "Dictionary Couldn't Found!"
                }
            }

            const word = await prisma.words.findFirst({
                where: { id: wordId }
            })

            if (!word) {
                return {
                    success: false,
                    message: "Word Couldn't Found!"
                }
            }

            const userWord = await prisma.userWords.findFirst({
                where: { word, authorId: userId }
            })

            const dictUserWord = {
                dictionaryId: dictionary.id,
                userWordId: ''
            }

            if (!userWord) {
                const newUserWord = await prisma.userWords.create({
                    data: {
                        wordId,
                        authorId: userId
                    }
                })
                dictUserWord.userWordId = newUserWord.id
            } else {
                dictUserWord.userWordId = userWord.id
            }

            await prisma.dictAndUserWords.create({
                data: dictUserWord
            })

            return {
                success: true,
                message: "Success"
            }
        })
})