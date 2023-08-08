import React from "react";
import CInput from "@/components/UI/Input/Input";
import { DictionariesSettingsSchema } from "@/schemas/dictionaries.settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Label, Separator, Textarea } from "@wordigo/ui";

import Border from "./Component/border";
import Description from "./Component/description";
import Images from "./Component/image";
import Link from "./Component/link";
import Title from "./Component/title";
import { SettingsData } from "./settings.constant";

type DictionariesValues = z.infer<typeof DictionariesSettingsSchema>;

export default function index() {
  const defaultValues: Partial<DictionariesValues> = {
    title: "",
    description: "",
    image: ""
  };

  const form = useForm<DictionariesValues>({
    resolver: zodResolver(DictionariesSettingsSchema),
    defaultValues,
    mode: "onSubmit",
  });
  const handleSave = (data: DictionariesValues) => {
    console.log(data);
  };

  return (
    <main>
      <section className="mb-7 flex items-center justify-between">
        <span>
          <h1 className="text-lg font-semibold leading-7">{SettingsData.page_title}</h1>
          <h1 className="text-sm text-[hsl(var(--muted-foreground))] font-semibold leading-7">{SettingsData.page_description}</h1>
        </span>
        <span>
          <Button onClick={handleSave} variant="outline" className="font-semibold text-sm mr-1">
            Cancle
          </Button>
          <Button onClick={handleSave} variant="default" className="font-semibold text-sm">
            Save
          </Button>
        </span>
      </section>
      <section className="w-full">
        <Form {...(form as any)}>
          <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control as never}
                name="link"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormControl>
                      <Link {...field} id="link" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Border />

              <FormField
                control={form.control as never}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormControl>
                      <Title {...field} id="title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Border />

              <FormField
                control={form.control as never}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormControl>
                      <Description {...field} id="description" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Border />

              <FormField
                control={form.control as never}
                name="image"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <FormControl>
                      <Images {...field} id="image" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-fit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
