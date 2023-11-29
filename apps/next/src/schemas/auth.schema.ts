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

export const AuthResetEmailSchema = z.object({
  email: z.string().min(1).email(),
});

export type AuthResetEmailValues = z.infer<typeof AuthResetEmailSchema>;

export const AuthResetPasswordSchema = z.object({
  new_password: z.string().min(6),
  confrimed_password: z.string().min(6),
});

export type AuthResetPasswordValues = z.infer<typeof AuthResetPasswordSchema>;
