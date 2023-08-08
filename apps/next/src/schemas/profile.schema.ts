import { z } from "zod";

export const ProfileFormSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(1)
})
