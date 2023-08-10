import React from "react";
import { useRouter } from "next/router";
import CInput from "@/components/UI/Input/Input";
import { DictionariesSettingsSchema } from "@/schemas/dictionaries.settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { boolean, type z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";

import Border from "./Component/border";
import Description from "./Component/description";
import Images from "./Component/image";
import Link from "./Component/link";
import Published from "./Component/published";
import Title from "./Component/title";

type DictionariesValues = z.infer<typeof DictionariesSettingsSchema>;

export default function index() {
  const router = useRouter();
  const { id } = router.query;

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

  const handleSave = (data: DictionariesValues) => {
    console.log(data);
  };

  const handleCancle = () => {
    void router.push(`/dashboard/dictionaries/${id}`);
  };

  const { t } = useTranslation();

  return (
    <main>
      <section className="mb-7 flex items-center justify-between">
        <span>
          <h1 className="text-lg font-semibold leading-7">{t("headers.dictionaries_settings.title")}</h1>
          <h1 className="text-sm text-[hsl(var(--muted-foreground))] font-semibold leading-7">{t("headers.dictionaries_settings.description")}</h1>
        </span>
        <span>
          <Button onClick={handleCancle} variant="outline" className="font-semibold text-sm mr-1">
            {t("buttons.cancle")}
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="w-fit dark:bg-LightBackground bg-DarkBackground font-semibold text-sm dark:text-black text-white"
          >
            {t("buttons.save")}
          </Button>
        </span>
      </section>
      <section className="w-full">
        <Border />
        <Form {...(form as any)}>
          <form onSubmit={form.handleSubmit(handleSave)}>
            <div className="grid">
              <FormField
                control={form.control as never}
                name="link"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <Link {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control as never}
                name="published"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <Published {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control as never}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <Title {...field} id="title" />
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
                      <Description {...field} id="description" />
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
                <Button onClick={handleCancle} variant="outline" className="font-semibold text-sm mr-1">
                  {t("buttons.cancle")}
                </Button>
                <Button
                  type="submit"
                  variant="outline"
                  className="w-fit dark:bg-LightBackground bg-DarkBackground font-semibold text-sm dark:text-black text-white"
                >
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
