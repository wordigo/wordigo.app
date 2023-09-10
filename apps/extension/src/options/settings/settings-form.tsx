import { zodResolver } from "@hookform/resolvers/zod"
import { Button, CardDescription, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Switch, useToast } from "@wordigo/ui"
import LanguageSelector from "@wordigo/ui/components/ui/language-selector"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { type z } from "zod"

import { TARGET_LANGUAGE_STORAGE, TRANSLATE_OPTION_STORAGE, translateOptionEnums } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"
import { SettingsFormSchema } from "~utils/schemas"
import { localStorage } from "~utils/storage"

type SettingsFormValues = z.infer<typeof SettingsFormSchema>

export const SettingsForm = () => {
  const [isLoading, setIsLoading] = useState(true)
  const defaultValues: Partial<SettingsFormValues> = {
    targetLanguage: "",
    select_and_translate: false,
    translate_button: false
  }

  const { toast } = useToast()
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(SettingsFormSchema),
    defaultValues,
    mode: "onChange"
  })

  const getStatus = async () => {
    const translateOption = await localStorage.get(TRANSLATE_OPTION_STORAGE)
    const targetLanguage = await localStorage.get(TARGET_LANGUAGE_STORAGE)
    if (translateOption === translateOptionEnums.select_and_translate) {
      form.setValue("select_and_translate", true)
    } else {
      form.setValue("translate_button", true)
    }
    form.setValue("targetLanguage", targetLanguage as never)
    setIsLoading(false)
  }

  useEffect(() => {
    void getStatus()
  }, [])

  const handleSaveChanges = async (values: SettingsFormValues) => {
    const convertStatusEnum = values.translate_button ? translateOptionEnums.translate_button : translateOptionEnums.select_and_translate

    await localStorage.set(TRANSLATE_OPTION_STORAGE, convertStatusEnum)
    await localStorage.set(TARGET_LANGUAGE_STORAGE, values.targetLanguage)
    toast({
      title: getLocalMessage("successNotifyTitle"),
      description: getLocalMessage("successNotifyDesc")
    })
  }

  const changeTranslateOption = (field: "select_and_translate" | "translate_button", status: boolean) => {
    if (field === "select_and_translate") form.setValue("translate_button", false)
    else form.setValue("select_and_translate", false)
    form.setValue(field, status)
  }

  if (!isLoading)
    return (
      <Form {...(form as any)}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSaveChanges)}>
          <FormField
            control={form.control as never}
            name="targetLanguage"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-y-2">
                <FormLabel>{getLocalMessage("targetLanguage")}</FormLabel>
                <FormControl>
                  <LanguageSelector className="h-10 px-3 py-2" onSelect={field.onChange as never} defaultValue={field.value} providerLanguages />
                </FormControl>
                <FormDescription>{getLocalMessage("targetLanguageDesc")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="mb-4 text-base font-medium">{getLocalMessage("translateOption")}</h3>
          <CardDescription>{getLocalMessage("translateOptionDesc")}</CardDescription>
          <div className="space-y-4">
            <FormField
              control={form.control as never}
              name="translate_button"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border-gray-400 border-opacity-40 border p-4 gap-x-2">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">{getLocalMessage("showTranslate")}</FormLabel>
                    <FormDescription>{getLocalMessage("showTranslateDesc")}</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={(status) => changeTranslateOption("translate_button", status)} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control as never}
              name="select_and_translate"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border-gray-400 border-opacity-40 border p-4 gap-x-2">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">{getLocalMessage("selectTranslate")}</FormLabel>
                    <FormDescription>{getLocalMessage("selectTranslateDesc")}</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={(status) => changeTranslateOption("select_and_translate", status)} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">{getLocalMessage("saveChanges")}</Button>
        </form>
      </Form>
    )
}

export default SettingsForm
