import { z } from "zod";

export const AuthLoginSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(6),
});

export type AuthLoginValues = z.infer<typeof AuthLoginSchema>;

export const AuthSıgnUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(1).email(),
  password: z.string().min(6),
});

export type AuthRegisterValues = z.infer<typeof AuthSıgnUpSchema>;
