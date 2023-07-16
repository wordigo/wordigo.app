import { zodResolver } from "@hookform/resolvers/zod"
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
          <h3 className="mb-4 text-base font-medium">Translation options</h3>
          <div className="space-y-4">
            <FormField
              control={form.control as never}
              name="communication_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Select and translate</FormLabel>
                    <FormDescription>
                      When you hover over the selected text, the spin button pops up, and when you press it, it opens the popup.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control as never}
              name="communication_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Double click translator</FormLabel>
                    <FormDescription>
                      Double-click translator Opening a direct translation popup when you double-click on the selected text.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </Form>
    )
}

export default SettingsForm
