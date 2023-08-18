import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@wordigo/ui";
import Logo from "data-base64:~assets/logo.png";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import "~/styles/globals.css";
import { Storage } from "@plasmohq/storage/";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";
import { RotateCw } from "lucide-react";
import { useState } from "react";
import Provider from "~providers";
import ThemeProvider from "~providers/theme";
import { getLocalMessage } from "~utils/locale";
import type { SetupFormSchema } from "~utils/schemas";
import { SettingsFormSchema } from "~utils/schemas";

const storage = new Storage({
  area: "local",
});

type SetupFormValues = z.infer<typeof SetupFormSchema>;

const WelcomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues: Partial<SetupFormValues> = {
    targetLanguage: "",
  };
  const form = useForm<SetupFormValues>({
    resolver: zodResolver(SettingsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const handleSaveChanges = async (values: SetupFormValues) => {
    setIsLoading(true);
    await storage.set("targetLanguage", values.targetLanguage);
    window.close();
    setIsLoading(false);
  };

  return (
    <Provider>
      <ThemeProvider>
        <div className="flex flex-col mx-auto justify-center items-center w-full h-screen">
          <div className="mt-auto mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
            <header className="flex justify-center z-50 w-full">
              <a
                href="https://wordigo.app/"
                target="_blank"
                className="px-4 sm:px-6 lg:px-8 pointer-events-auto"
              >
                <img className="w-48" src={Logo} />
              </a>
            </header>
            <div className="flex flex-col items-center justify-center gap-y-10">
              <p className="mt-3 max-w-lg  text-gray-600 dark:text-gray-400 text-center">
                {getLocalMessage("welcome")}
              </p>
              <Form {...(form as any)}>
                <form
                  className="space-y-4 max-w-md"
                  onSubmit={form.handleSubmit(handleSaveChanges)}
                >
                  <FormField
                    control={form.control as never}
                    name="targetLanguage"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-y-2">
                        <FormLabel>
                          {getLocalMessage("targetLanguage")}
                        </FormLabel>
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
                  <Button
                    disabled={isLoading}
                    className="mt-10  w-full"
                    type="submit"
                  >
                    {isLoading ? (
                      <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Save"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          <footer className="mt-auto text-center py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-gray-500">
                {getLocalMessage("footer")}
              </p>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default WelcomePage;
