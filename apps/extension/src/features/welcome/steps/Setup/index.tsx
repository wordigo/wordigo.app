import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@wordigo/ui"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import "~/styles/globals.css"

import LanguageSelector from "@wordigo/ui/components/ui/language-selector"
import { RotateCw } from "lucide-react"
import { useState } from "react"

import { TARGET_LANGUAGE_STORAGE, TRANSLATE_OPTION_STORAGE, translateOptionEnums } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"
import type { SetupFormSchema } from "~utils/schemas"
import { SettingsFormSchema } from "~utils/schemas"
import { localStorage } from "~utils/storage"

type SetupFormValues = z.infer<typeof SetupFormSchema>

const SetupPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const defaultValues: Partial<SetupFormValues> = {
    targetLanguage: ""
  }
  const form = useForm<SetupFormValues>({
    resolver: zodResolver(SettingsFormSchema),
    defaultValues,
    mode: "onChange"
  })

  const handleSaveChanges = async (values: SetupFormValues) => {
    setIsLoading(true)
    await localStorage.set(TARGET_LANGUAGE_STORAGE, values.targetLanguage)
    await localStorage.set(TRANSLATE_OPTION_STORAGE, translateOptionEnums.translate_button)
    setIsLoading(false)
    window.close()
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 mb-10">
      <div className="max-w-lg flex flex-col gap-y-4">
        <h3 className="text-3xl text-gray-900 font-medium dark:text-white">{getLocalMessage("complete_install")}</h3>
        <p className=" text-gray-600 text-base dark:text-gray-400 text-center">{getLocalMessage("complete_install_desc")}</p>
      </div>
      <Form {...(form as any)}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSaveChanges)}>
          <FormField
            control={form.control as never}
            name="targetLanguage"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-y-2">
                <FormLabel>{getLocalMessage("native_language")}</FormLabel>
                <FormControl>
                  <LanguageSelector placeholder={getLocalMessage("select_language")} className="h-10 px-3 py-2" onSelect={field.onChange as never} defaultValue={field.value} providerLanguages />
                </FormControl>
                <FormDescription>{getLocalMessage("targetLanguageDesc")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} className="mt-10 w-full" type="submit">
            {isLoading ? <RotateCw className="mr-2 h-4 w-4 animate-spin" /> : getLocalMessage("complete")}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SetupPage
