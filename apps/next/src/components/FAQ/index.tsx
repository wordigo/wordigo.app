import useFaq, {
  type Question,
} from "@/components/Home/FAQSection/faq.constant";
import { useTranslation } from "next-i18next";

const FAQSection = () => {
  const faq = useFaq();
  const { t } = useTranslation();

  return (
    <>
      <section className="text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {t("faq.heading")}
        </h1>
        <p className="sm:text-lg md:text-xl mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 text-muted-foreground">
          {t("faq.description")}
        </p>
      </section>

      <section className="grid grid-cols-3 gap-x-8 gap-y-16 max-lg:grid-cols-2 max-md:grid-cols-1">
        {faq.map((item, index) => (
          <FAQSection.Card
            key={index}
            question={item.question}
            answer={item.answer}
            Icon={item.Icon}
          />
        ))}
      </section>
    </>
  );
};

FAQSection.Card = ({ question, answer, Icon }: Question) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-6 h-6 p-3 box-content border rounded-[0.625rem]" />
      <span className="text-xl font-semibold mt-5 text-center max-lg:text-">
        {question}
      </span>
      <p className="text-base text-muted-foreground mt-2 text-center">
        {answer}
      </p>
    </div>
  );
};

export default FAQSection;
