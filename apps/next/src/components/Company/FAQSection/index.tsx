import useFaqs, { type Question } from "./faq.constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@wordigo/ui";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const FAQSection = () => {
  const faqs = useFaqs();
  const { t } = useTranslation();

  const computedFaqs = faqs.slice(0, 3);

  return (
    <section className="flex gap-y-6 flex-col items-center">
      <h2 className="text-4xl font-semibold max-lg:text-2xl">
        {t("faq.heading")}
      </h2>
      <p className="text-xl text-muted-foreground mt-5 max-lg:text-base max-lg:mt-4">
        {t("faq.description")}
      </p>
      <div className="flex flex-col gap-y-8 w-full max-w-3xl">
        {computedFaqs.map((item, index) => (
          <FAQSection.Card
            key={index}
            question={item.question}
            answer={item.answer}
            Icon={item.Icon}
          />
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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={answer}>
        <AccordionTrigger className="text-lg font-semibold">
          {question}
        </AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQSection;
