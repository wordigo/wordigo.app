import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
  useToast
} from "@wordigo/ui"

import "@wordigo/ui/styles/globals.css"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { Storage } from "@plasmohq/storage"

import LanguageSelector from "~../../packages/ui/components/ui/language-selector"
import { SettingsFormSchema } from "~utils/schemas"

const storage = new Storage({
  area: "local"
})

type SettingsFormValues = z.infer<typeof SettingsFormSchema>

export const SettingsForm = () => {
  const [isLoading, setIsLoading] = useState(true)
  const defaultValues: Partial<SettingsFormValues> = {
    targetLanguage: "",
    translateStatus: false
  }

  const { toast } = useToast()
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(SettingsFormSchema),
    defaultValues,
    mode: "onChange"
  })

  const getStatus = async () => {
    const translateStatus = await storage.get("translateStatus")
    const targetLanguage = await storage.get("targetLanguage")
    form.setValue("translateStatus", translateStatus as never)
    form.setValue("targetLanguage", targetLanguage as never)

    setIsLoading(false)
  }

  useEffect(() => {
    void getStatus()
  }, [])

  const handleSaveChanges = async (values: SettingsFormValues) => {
    await storage.set("translateStatus", values.translateStatus)
    await storage.set("targetLanguage", values.targetLanguage)
    toast({
      title: "Successful",
      description: "Your changes have been successfully saved."
    })
  }

  if (!isLoading)
    return (
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSaveChanges)}>
          <FormField
            control={form.control as never}
            name="translateStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Translate Status</FormLabel>
                <FormControl>
                  <Switch className="flex" checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormDescription>You can turn the translation feature on or off by clicking on the text.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control as never}
            name="targetLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Language</FormLabel>
                <FormControl>
                  <LanguageSelector onSelect={field.onChange as never} defaultValue={field.value} providerLanguages />
                </FormControl>
                <FormDescription>
                  You can set the language in which the texts you will translate will be translated.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save Changes</Button>
        </form>
      </Form>
    )
}

export default SettingsForm
