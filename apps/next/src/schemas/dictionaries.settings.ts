import { z } from "zod";

export const DictionariesSettingsSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(3),
    image: z.string(),
    published: z.boolean()
})
