import { useTranslation } from "next-i18next";

import { Button, Input } from "@wordigo/ui";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="px-20 flex flex-col items-center py-24 border rounded-2xl mx-20 my-24">
      <h2 className="text-4xl font-semibold">{t("newsletter.heading")}</h2>
      <p className="text-xl mt-5 text-muted-foreground">{t("newsletter.description")}</p>
      <form className="mt-8 flex items-center">
        <Input type="email" placeholder={t("newsletter.placeholder")} className="mr-4" />
        <Button type="submit" className="whitespace-nowrap">
          {t("newsletter.button")}
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
