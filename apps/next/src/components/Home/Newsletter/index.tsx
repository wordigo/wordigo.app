import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const NewLetterSchema = z.object({
  email: z.string().nonempty(),
});

type NewLetterValues = z.infer<typeof NewLetterSchema>;

const Newsletter = () => {
  const { t } = useTranslation();

  const defaultValues: Partial<NewLetterValues> = {
    email: "",
  };

  const form = useForm<NewLetterValues>({
    resolver: zodResolver(NewLetterSchema),
    defaultValues,
  });

  const handleAddEmail = (values: NewLetterValues, e: React.FormEvent) => {
    e.preventDefault();
    console.log(values.email);
  };

  return (
    <section className="px-20 flex flex-col items-center py-24 border rounded-2xl mx-20 my-24 max-lg:py-12 max-lg:my-20 max-lg:px-9 max-md:px-5 max-md:mx-4 max-md:py-8">
      <h2 className="text-4xl font-semibold max-lg:text-2xl text-center">
        {t("newsletter.heading")}
      </h2>
      <p className="text-xl mt-5 text-muted-foreground max-lg:text-base max-md:mt-2 text-center">
        {t("newsletter.description")}
      </p>
      <form
        onSubmit={form.handleSubmit(handleAddEmail)}
        className="mt-8 flex items-center max-md:flex-col max-md:gap-2 max-md:mt-6"
      >
        <Input
          type="email"
          placeholder={t("newsletter.placeholder")}
          className="mr-4 max-md:w-[150px] min-w-[350px]"
          {...form.register("email")}
        />
        <Button type="submit" className="whitespace-nowrap max-md:mt-2">
          {t("newsletter.button")}
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
