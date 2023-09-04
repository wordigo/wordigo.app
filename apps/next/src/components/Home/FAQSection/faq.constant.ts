import {
  Album,
  CreditCard,
  HelpCircle,
  Info,
  Languages,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "next-i18next";
import { FaMobileAlt } from "react-icons/fa";

export interface Question {
  question: string;
  answer: string;
  Icon: LucideIcon;
}

const FAQ = (): Question[] => {
  const { t } = useTranslation();

  return [
    {
      question: t("faq.what_is_wordigo.question"),
      answer: t("faq.what_is_wordigo.answer"),
      Icon: HelpCircle,
    },
    {
      question: t("faq.how_to_use_wordigo.question"),
      answer: t("faq.how_to_use_wordigo.answer"),
      Icon: Info,
    },
    {
      question: t("faq.free_to_use_wordigo.question"),
      answer: t("faq.free_to_use_wordigo.answer"),
      Icon: CreditCard,
    },
    {
      question: t("faq.share_dictionary_with_others.question"),
      answer: t("faq.share_dictionary_with_others.answer"),
      Icon: Album,
    },
    {
      question: t("faq.wordigo_mobile_application.question"),
      answer: t("faq.wordigo_mobile_application.answer"),
      Icon: FaMobileAlt,
    },
    {
      question: t("faq.supported_languages.question"),
      answer: t("faq.supported_languages.answer"),
      Icon: Languages,
    },
  ];
};

export default FAQ;
