import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Toaster,
  useToast
} from "@acme/ui"

import "@acme/ui/styles/globals.css"

import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { Storage } from "@plasmohq/storage"

import { supportLanguages } from "~common/supportedLanguages"
import { profileFormSchema } from "~utils/schemas"

const storage = new Storage({
  area: "local"
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  targetLanguage: "0",
  translateStatus: false
}

export const SettingsForm = () => {
  const { toast } = useToast()
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange"
  })

  const getStatus = async () => {
    const translateStatus = await storage.get("translateStatus")
    form.setValue("translateStatus", translateStatus as never)
  }

  useEffect(() => {
    getStatus()
  }, [])

  const handleSaveChanges = async () => {
    const values = form.getValues()
    await storage.set("translateStatus", values.translateStatus)
    toast({
      title: "Successful",
      description: "Your changes have been successfully saved."
    })
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handleSaveChanges)}>
        <FormField
          control={form.control}
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
          control={form.control}
          name="targetLanguage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target Language</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0" disabled>
                        Select language
                      </SelectItem>
                      {supportLanguages.map((lang) => {
                        return (
                          <SelectItem key={lang[0]} value={lang[0]}>
                            {lang[1]}
                          </SelectItem>
                        )
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                You can set the language in which the texts you will translate will be translated.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <ScrollArea className="h-[200px] w-[350px] rounded-md">
              <DropdownMenuSeparator />
              {supportLanguages.map((lang) => {
                return (
                  <DropdownMenuItem key={lang[0]}>{lang[1]}</DropdownMenuItem>
                )
              })}
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button type="submit">Save Changes</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default SettingsForm
