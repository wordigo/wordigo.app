import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-20 py-24 flex flex-col items-center">
      <span className="px-32">
        <h1 className="text-5xl font-semibold text-center">{t(`about.title`)}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("about.description") }} className="text-xl text-muted-foreground mt-6 text-center" />
      </span>
    </div>
  );
}
