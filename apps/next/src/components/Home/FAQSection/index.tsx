import { useTranslation } from "next-i18next";
import { ArrowRight } from "lucide-react"
import FAQ, { type Question } from "./faq.constant";
import { Button } from "@wordigo/ui";
import Link from "next/link";

const FAQSection = () => {
  const { t } = useTranslation();

  const selectedFAQ = FAQ.slice(0, 3);

  return (
    <section className="px-20 py-24 flex flex-col items-center max-md:px-4 max-md:mx-4">
      <h2 className="text-4xl font-semibold max-lg:text-2xl">{t("faq.heading")}</h2>
      <p className="text-xl text-muted-foreground mt-5 max-lg:text-base max-lg:mt-4">{t("faq.description")}</p>
      <div className="mt-16 grid grid-cols-3 gap-x-8 gap-y-16 max-lg:grid-cols-1 max-lg:mt-12">
        {selectedFAQ.map((item, index) => (
          <FAQSection.Card key={index} question={item.question} answer={item.answer} Icon={item.Icon} />
        ))}
      </div>

      <Link href="/faq">
        <Button className="mt-10">
          {t("faq.button")} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </section>
  );
};

FAQSection.Card = ({ question, answer, Icon }: Question) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-6 h-6 p-3 box-content border rounded-[0.625rem]" />
      <span className="text-xl font-semibold mt-5 text-center max-lg:text-">{question}</span>
      <p className="text-base text-muted-foreground mt-2 text-center">{answer}</p>
    </div>
  );
};

export default FAQSection;
