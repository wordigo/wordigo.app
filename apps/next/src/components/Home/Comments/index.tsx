import { useTranslation } from "next-i18next";

import Comments from "./Comments";

const CommentSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-20 py-24 pb-12 w-full flex flex-col items-center max-lg:px-4">
      <h2 className="text-4xl font-semibold">{t("testimonials.heading")}</h2>
      <p className="text-xl text-muted-foreground mt-5">{t("testimonials.description")}</p>
      <div className="w-full mt-16">
        <Comments />
      </div>
    </section>
  );
};

export default CommentSection;
