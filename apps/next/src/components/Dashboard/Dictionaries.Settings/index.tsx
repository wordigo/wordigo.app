import Images from "./Component/image";
import CInput from "@/components/UI/Input/Input";
import { DictionariesSettingsSchema } from "@/schemas/dictionaries.settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Label, Switch, Textarea, useToast } from "@wordigo/ui";
import { Copy } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { type z } from "zod";

type DictionariesValues = z.infer<typeof DictionariesSettingsSchema>;

export default function index() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { data } = useSession();
  const router = useRouter();
  const { slug } = router.query;

  const defaultValues: Partial<DictionariesValues> = {
    title: "",
    description: "",
    image: "",
    published: false,
  };

  const form = useForm<DictionariesValues>({
    resolver: zodResolver(DictionariesSettingsSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const handleSave = (data: DictionariesValues) => {};

  const handleCopyUrl = () => {
    void navigator.clipboard.writeText(`https://wordigo.app/` + form.getValues().title);
    toast({ title: "Successful", description: "Copied dictionary public url." });
  };

  const handleCancel = () => {
    void router.push(`/dashboard/dictionaries/${slug}`);
  };

  return (
    <main>
      <section className="mb-7 flex items-center justify-between">
        <span>
          <h1 className="text-lg font-semibold leading-7">{t("headers.dictionaries_settings.title")}</h1>
          <h1 className="text-sm text-[hsl(var(--muted-foreground))] font-semibold leading-7">{t("headers.dictionaries_settings.description")}</h1>
        </span>
        <span>
          <Button onClick={handleCancel} variant="outline" className="font-semibold text-sm mr-1">
            {t("buttons.cancel")}
          </Button>
          <Button type="submit" variant="outline" className="w-fit dark:bg-LightBackground bg-DarkBackground font-semibold text-sm dark:text-black text-white">
            {t("buttons.save")}
          </Button>
        </span>
      </section>
      <section className="w-full">
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-800 rounded-full my-5" />
        <Form {...(form as any)}>
          <form onSubmit={form.handleSubmit(handleSave)}>
            <div className="grid">
              <FormField
                control={form.control as never}
                name="link"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <div className="grid grid-cols-3 w-full">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("link")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.link_notes")}</p>
                        </span>
                        <CInput
                          disabled
                          className="placeholder:!text-gray-400"
                          defaultValue={`wordigo.app/library/${data.user.username}`}
                          rightSection={<Copy onClick={handleCopyUrl} className="text-muted-foreground" size={20} />}
                          placeholder={field.value}
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 w-full">
                <section className="max-w-[280px] min-w-[280px] mr-8 word-break">
                  <Label>
                    <h1>{t("published_status")}</h1>
                  </Label>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.published_status_note")}</p>
                </section>
                <section className="w-full flex flex-col gap-y-4">
                  <FormField
                    control={form.control as never}
                    name="published"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">{t("dictionaries_settings.published.true_title")}</FormLabel>
                          <FormDescription>{t("dictionaries_settings.published.true_description")}</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control as never}
                    name="published"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">{t("dictionaries_settings.published.false_title")}</FormLabel>
                          <FormDescription>{t("dictionaries_settings.published.false_description")}</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </section>
              </div>

              <FormField
                control={form.control as never}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <main className="grid grid-cols-3 w-full">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("title")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.title_notes")}</p>
                        </span>
                        <Input {...field} placeholder={t("title")} />
                      </main>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control as never}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <main className="grid grid-cols-3 w-full">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("description")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.title_notes")}</p>
                        </span>
                        <Textarea {...field} placeholder={t("description")} />
                      </main>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control as never}
                name="image"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <Images {...field} id="image" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full text-end my-7">
                <Button onClick={handleCancel} variant="outline" className="font-semibold text-sm mr-1">
                  {t("buttons.cancel")}
                </Button>
                <Button type="submit" variant="outline" className="w-fit dark:bg-LightBackground bg-DarkBackground font-semibold text-sm dark:text-black text-white">
                  {t("buttons.save")}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
