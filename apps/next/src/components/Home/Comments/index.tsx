import { useTranslation } from "next-i18next";

import Comment from "./Comment";

export default function Comments() {
  const { t } = useTranslation();

  return (
    <section className="px-20 py-24 w-full flex flex-col items-center max-lg:px-4">
      <h2 className="text-4xl font-semibold">{t("testimonials.heading")}</h2>
      <p className="text-xl text-muted-foreground mt-5">{t("testimonials.description")}</p>
      <div className="grid grid-cols-3 grid-rows-2 w-full mt-16 gap-x-8 gap-y-8 max-xl:grid-cols-2 max-lg:grid-cols-1">
        <Comment />
      </div>
    </section>
  );
}
