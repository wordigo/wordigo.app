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

export const AuthForgotEmailSchema = z.object({
  email: z.string().min(1).email(),
});

export type AuthForgotEmailValues = z.infer<typeof AuthForgotEmailSchema>;

export const AuthForgotPasswordSchema = z.object({
  new_password: z.string().min(6),
  confrim_password: z.string().min(6),
});

export type AuthForgotPasswordValues = z.infer<typeof AuthForgotPasswordSchema>;
