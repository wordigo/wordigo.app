import { z } from "zod";

export const EmailFormSchema = z.object({
  title: z.string().min(3),
});

export const PasswordFormSchema = z.object({
  password: z.string().min(8),
  currentPassword: z.string().min(8),
});

export const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
});
