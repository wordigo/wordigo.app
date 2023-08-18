import { zodResolver } from "@hookform/resolvers/zod";
import { Storage } from "@plasmohq/storage";
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
  useToast,
} from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { getLocalMessage } from "~utils/locale";
import { SettingsFormSchema } from "~utils/schemas";

const storage = new Storage({
  area: "local",
});

type SettingsFormValues = z.infer<typeof SettingsFormSchema>;

export const SettingsForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const defaultValues: Partial<SettingsFormValues> = {
    targetLanguage: "",
    translateStatus: false,
  };

  const { toast } = useToast();
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(SettingsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const getStatus = async () => {
    const translateStatus = await storage.get("translateStatus");
    const targetLanguage = await storage.get("targetLanguage");
    form.setValue("translateStatus", translateStatus as never);
    form.setValue("targetLanguage", targetLanguage as never);

    setIsLoading(false);
  };

  useEffect(() => {
    void getStatus();
  }, []);

  const handleSaveChanges = async (values: SettingsFormValues) => {
    await storage.set("translateStatus", values.translateStatus);
    await storage.set("targetLanguage", values.targetLanguage);
    toast({
      title: "Successful",
      description: "Your changes have been successfully saved.",
    });
  };

  if (!isLoading)
    return (
      <Form {...(form as any)}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleSaveChanges)}
        >
          <FormField
            control={form.control as never}
            name="targetLanguage"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-y-2">
                <FormLabel>{getLocalMessage("targetLanguage")}</FormLabel>
                <FormControl>
                  <LanguageSelector
                    className="h-10 px-3 py-2"
                    onSelect={field.onChange as never}
                    defaultValue={field.value}
                    providerLanguages
                  />
                </FormControl>
                <FormDescription>
                  {getLocalMessage("targetLanguageDesc")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <h3 className="mb-4 text-base font-medium">
            {getLocalMessage("translateOptions")}
          </h3>
          <CardDescription>
            {getLocalMessage("translateOptionsDesc")}
          </CardDescription>
          <div className="space-y-4">
            <FormField
              control={form.control as never}
              name="communication_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border-gray-400 border-opacity-40 border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      {getLocalMessage("showTranslate")}
                    </FormLabel>
                    <FormDescription>
                      {getLocalMessage("showTranslateDesc")}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
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
                    <FormLabel className="text-base">
                      {getLocalMessage("selectTranslate")}
                    </FormLabel>
                    <FormDescription>
                      {getLocalMessage("selectTranslateDesc")}
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">{getLocalMessage("saveChanges")}</Button>
        </form>
      </Form>
    );
};

export default SettingsForm;
