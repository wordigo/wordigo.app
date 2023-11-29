import { z } from "zod";

export const AuthLoginSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(6),
});

export type AuthLoginValues = z.infer<typeof AuthLoginSchema>;

export const AuthSignUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(1).email(),
  password: z.string().min(6),
});

export type AuthRegisterValues = z.infer<typeof AuthSignUpSchema>;

export const AuthForgetEmailSchema = z.object({
  email: z.string().min(1).email(),
});

export type AuthForgetEmailValues = z.infer<typeof AuthForgetEmailSchema>;

export const AuthForgetPasswordSchema = z.object({
  new_password: z.string().min(6),
  confrim_password: z.string().min(6),
});

export type AuthForgetPasswordValues = z.infer<typeof AuthForgetPasswordSchema>;
