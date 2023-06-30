import { z } from "zod"

export const profileFormSchema = z.object({
  targetLanguage: z
    .string({ required_error: "Please select target language" }),
  translateStatus: z.boolean({})
})