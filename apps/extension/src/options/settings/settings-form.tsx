import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  CardDescription,
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
import LanguageSelector from "@wordigo/ui/components/ui/language-selector"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { Storage } from "@plasmohq/storage"

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
              <FormItem className="flex flex-col gap-y-2">
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
          <CardDescription>
            Enable the 'Show Translate Button' for a convenient button next to selected text, or use 'Select and translate' to
            effortlessly translate by hovering over the text and clicking the spin button.
          </CardDescription>
          <div className="space-y-4">
            <FormField
              control={form.control as never}
              name="communication_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border-gray-400 border-opacity-40 border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Show Translate Button</FormLabel>
                    <FormDescription>
                      Enable this option to display a translate button next to the selected text, making translation more
                      accessible.
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
                <FormItem className="flex flex-row items-center justify-between rounded-lg border-gray-400 border-opacity-40  border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Select and translate</FormLabel>
                    <FormDescription>
                      Clicking on the selected text opens a pop-up window that provides the translation of the selected text.
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
