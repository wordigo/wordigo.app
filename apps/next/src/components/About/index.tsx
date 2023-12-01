import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();

  return (
    <section className="text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {t(`about.title`)}
      </h1>
      <p
        dangerouslySetInnerHTML={{ __html: t("about.description") }}
        className="sm:text-lg md:text-xl mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 text-muted-foreground"
      />
    </section>
  );
}
