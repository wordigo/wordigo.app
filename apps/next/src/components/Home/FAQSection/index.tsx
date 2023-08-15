import { useTranslation } from "next-i18next";

import FAQ, { type Question } from "./faq.constant";

const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-20 py-24 flex flex-col items-center">
      <h2 className="text-4xl font-semibold">{t("faq.heading")}</h2>
      <p className="text-xl text-muted-foreground mt-5">{t("faq.description")}</p>
      <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-16 max-lg:grid-cols-2">
        {FAQ.map((item, index) => (
          <FAQSection.Card key={index} question={item.question} answer={item.answer} Icon={item.Icon} />
        ))}
      </div>
    </section>
  );
};

FAQSection.Card = ({ question, answer, Icon }: Question) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-6 h-6 p-3 box-content border rounded-[0.625rem]" />
      <span className="text-xl font-semibold mt-5 text-center">{question}</span>
      <p className="text-base text-muted-foreground mt-2 text-center">{answer}</p>
    </div>
  );
};

export default FAQSection;
