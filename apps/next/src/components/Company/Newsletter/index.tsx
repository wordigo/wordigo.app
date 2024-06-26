import { Button, Input } from "@wordigo/ui";
import { useTranslation } from "next-i18next";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <section className="container flex flex-col items-center py-24 border rounded-2xl my-24 max-lg:py-12 max-lg:my-20 max-md:py-8">
      <h2 className="text-4xl font-semibold max-lg:text-2xl text-center">{t("newsletter.heading")}</h2>
      <p className="text-xl mt-5 text-muted-foreground max-lg:text-base max-md:mt-2 text-center">{t("newsletter.description")}</p>
      <form className="mt-8 flex items-center max-md:flex-col max-md:gap-2 max-md:mt-6">
        <Input type="email" placeholder={t("newsletter.placeholder")} className="mr-4 max-md:w-[150px]" />
        <Button type="submit" className="whitespace-nowrap max-md:mt-2">
          {t("newsletter.button")}
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
