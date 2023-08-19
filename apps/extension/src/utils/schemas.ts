import { z } from "zod";

export const SettingsFormSchema = z.object({
  targetLanguage: z
    .string({ required_error: "Please select target language" })
    .nonempty("Select a target language."),
  select_and_translate: z.boolean().optional(),
  translate_button: z.boolean().optional(),
});

export const SetupFormSchema = z.object({
  targetLanguage: z
    .string({ required_error: "Please select target language" })
    .nonempty("Select a target language."),
});
