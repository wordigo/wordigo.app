import Animation from "@/components/Animation";
import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();
  return (
    <Animation>
      <div className="max-w-screen-8xl w-full m-auto my-10">
        <div className="flex flex-col items-center justify-center">
          <span className="flex gap-6 items-center justify-center flex-wrap flex-col">
            <h1 className="text-3xl font-bold tracking-tight py-2 opacity-80">{t(`about_page_title`)}</h1>
            <p dangerouslySetInnerHTML={{ __html: t("about_page_description") }} className="w-[680px] text-lg text-center" />
          </span>
        </div>
      </div>
    </Animation>
  );
}
