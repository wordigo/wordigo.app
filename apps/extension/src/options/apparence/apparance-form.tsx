import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, RadioGroup, RadioGroupItem, buttonVariants, useToast } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import LanguageSelector from "~features/popup/components/LanguageSelector";
import { getLocalMessage, getUILanguage } from "~utils/locale";
import { localStorage } from "~utils/storage";

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
});

export type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

const ApparanceForm = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {},
  });

  async function onSubmit(data: AppearanceFormValues) {
    await localStorage.set("theme", data.theme);
    toast({
      title: getLocalMessage("successNotifyTitle"),
      description: getLocalMessage("successNotifyDesc"),
    });
  }

  useEffect(() => {
    void localStorage.get("theme").then((value: AppearanceFormValues["theme"]) => {
      form.reset({ theme: value || "light" });
      setMounted(true);
    });
  }, []);

  const uiLanguage = getUILanguage()?.split("-")?.[0]?.toUpperCase();

  if (mounted)
    return (
      <Form {...(form as any)}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control as never}
            name="font"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-1">{getLocalMessage("font")}</FormLabel>
                <div className="relative w-max">
                  <FormControl>
                    <select className={cn(buttonVariants({ variant: "outline" }), "w-[200px] appearance-none bg-transparent font-normal")} {...field}>
                      <option value="inter">Inter</option>
                      <option value="manrope">Manrope</option>
                      <option value="system">System</option>
                    </select>
                  </FormControl>
                  <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                </div>
                <FormDescription className="mt-2">{getLocalMessage("fontDesc")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem className="flex flex-col gap-y-2">
            <FormLabel>{getLocalMessage("uiLanguage")}</FormLabel>
            <FormControl>
              <LanguageSelector triggerClass="!w-[200px] h-10 px-3 py-2" defaultValue={uiLanguage} disabled />
            </FormControl>
            <FormDescription>{getLocalMessage("uiLanguageDesc")}</FormDescription>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control as never}
            name="theme"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>{getLocalMessage("theme")}</FormLabel>
                <FormDescription>{getLocalMessage("themeDesc")}</FormDescription>
                <FormMessage />
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-8 pt-2">
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value="light" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                        <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                          <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                            <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                            <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                          </div>
                        </div>
                      </div>
                      <span className="block w-full p-2 text-center font-normal">{getLocalMessage("light")}</span>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                      <FormControl>
                        <RadioGroupItem value="dark" className="sr-only" />
                      </FormControl>
                      <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                        <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                          <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                            <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                            <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-slate-400" />
                            <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                          </div>
                          <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                            <div className="h-4 w-4 rounded-full bg-slate-400" />
                            <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                          </div>
                        </div>
                      </div>
                      <span className="block w-full p-2 text-center font-normal">{getLocalMessage("dark")}</span>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormItem>
            )}
          />

          <Button type="submit">{getLocalMessage("update_prefences")}</Button>
        </form>
      </Form>
    );
};

export default ApparanceForm;
