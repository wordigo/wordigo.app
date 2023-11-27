import { useTranslation } from "next-i18next";

import Comments from "./Comments";

const CommentSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-4xl font-semibold">{t("testimonials.heading")}</h2>
      <p className="text-xl text-muted-foreground mt-5">{t("testimonials.description")}</p>
      <div className="w-full mt-16">
        <Comments />
      </div>
    </section>
  );
};

export default CommentSection;
