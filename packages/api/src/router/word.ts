import { z } from "zod"

import { prisma } from "@wordigo/db"

import { DictionaryInitialTitle, LearningStatuses } from "../../../common/constants/index"
import messages from "../../../common/constants/messages"
import { errorResult, successResult } from "../../../common/constants/results"
import { AllCountryLanguages } from '../../../common/index'
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const wordRouter = createTRPCRouter({
  addWord: protectedProcedure
    .input(
      z.object({
        text: z.string(),
        translatedText: z.string(),
        nativeLanguage: z.string(),
        targetLanguage: z.string(),
        dictionaryId: z.string().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { text, translatedText, nativeLanguage, targetLanguage, dictionaryId } = input
      const userId = ctx.user.id

      if ((dictionaryId?.length as number) > 0) {
        const dicFromDb = await prisma.dictionaries.findFirst({
          where: {
            id: dictionaryId as string,
            authorId: userId,
          },
        })

        if (!dicFromDb) {
          return errorResult<boolean>(false, messages.dictionary_not_found)
        }
      }

      const doLangsExist = AllCountryLanguages.filter(lang => {
        return lang.code.toLowerCase() === nativeLanguage.trim().toLowerCase() ||
          lang.code.toLowerCase() === targetLanguage.trim().toLowerCase()
      })

      if (doLangsExist.length !== 2) {
        return errorResult<boolean>(false, messages.language_not_found)
      }

      const wordFromDb = await prisma.words.findFirst({
        where: {
          text: text.trim().toLowerCase(),
          translatedText: translatedText.trim().toLowerCase(),
          nativeLanguage,
          targetLanguage,
        },
      })

      let word
      if (!wordFromDb)
        word = await prisma.words.create({
          data: {
            text: text.trim().toLowerCase(),
            translatedText: translatedText.trim().toLowerCase(),
            nativeLanguage,
            targetLanguage,
          },
        })
      else word = wordFromDb

      const wordExistInUserWord = await prisma.userWords.findFirst({
        where: {
          authorId: userId,
          wordId: word.id
        }
      })

      if (wordExistInUserWord)
        return errorResult<boolean>(false, messages.user_word_already_exists)

      const userWord = await prisma.userWords.create({
        data: {
          wordId: word.id,
          learningStatus: LearningStatuses["Not Learned"],
          authorId: userId,
        },
      })

      const initialDictionary = await prisma.dictionaries.findFirst({
        where: {
          title: DictionaryInitialTitle,
        },
      })

      await prisma.dictAndUserWords.create({
        data: {
          userWordId: userWord.id,
          dictionaryId: initialDictionary?.id as string,
        },
      })

      if (dictionaryId) {
        await prisma.dictAndUserWords.create({
          data: {
            userWordId: userWord.id,
            dictionaryId,
          },
        })
      }

      return successResult<boolean>(true, messages.success)
    }),

  //Whole list can be seen just by admins
  // getWordList: protectedProcedure
  //   .query(async ({ ctx }) => {
  //     const userId = ctx.user
  //     // some authority control

  //     const words = await prisma.words.findMany()

  //     return {
  //       data: words,
  //       success: true,
  //       message: 'Success'
  //     }

  //   }),
})
