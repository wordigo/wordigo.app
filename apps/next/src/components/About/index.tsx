import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-20 py-24 flex flex-col items-center max-lg:px-9 max-md:px-0 max-lg:py-12">
      <span className="px-32 max-lg:px-20 max-md:px-4">
        <h1 className="text-5xl font-semibold text-center max-lg:text-3xl">{t(`about.title`)}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("about.description") }} className="text-xl text-muted-foreground mt-6 text-center max-lg:text-lg" />
      </span>
    </div>
  );
}
