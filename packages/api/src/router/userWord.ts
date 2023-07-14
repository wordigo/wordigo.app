import { z } from "zod"


import { createTRPCRouter, protectedProcedure } from "../trpc"


export const wordRouter = createTRPCRouter({
    removeWord: protectedProcedure
        .input(
            z.object({
                wordId: z.string(),
            }),
        )
        .mutation(async ({ ctx, input }) => {
            const { wordId } = input
            const userId = ctx.user.id

        }),


})
