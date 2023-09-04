import useFaq, {
  type Question,
} from "@/components/Home/FAQSection/faq.constant";
import { useTranslation } from "next-i18next";

const FAQSection = () => {
  const faq = useFaq();
  const { t } = useTranslation();

  return (
    <section className="px-20 py-24 flex flex-col items-center max-lg:px-9 max-md:px-0 max-lg:py-12 max-md:mx-4 max-md:py-8">
      <h2 className="text-4xl font-semibold max-lg:text-2xl">
        {t("faq.heading")}
      </h2>
      <p className="text-xl text-muted-foreground mt-5 max-lg:text-base max-lg:mt-4">
        {t("faq.description")}
      </p>
      <div className="mt-16 grid grid-cols-3 gap-x-8 gap-y-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:mt-8">
        {faq.map((item, index) => (
          <FAQSection.Card
            key={index}
            question={item.question}
            answer={item.answer}
            Icon={item.Icon}
          />
        ))}
      </div>
    </section>
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
