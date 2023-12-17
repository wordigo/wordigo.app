import { type LucideIcon, Mail } from "lucide-react";
import { useTranslation } from "next-i18next";

export interface IContact {
  Icon: LucideIcon;
  title: string;
  description: string;
  link_name: string;
  href: string;
}

const useContactsList = (): IContact[] => {
  const { t } = useTranslation();

  return [
    {
      Icon: Mail,
      title: t("contact.mail_title"),
      description: t("contact.mail_description"),
      link_name: t("contact.mail_link"),
      href: "mailto:noreply@wordigo.com",
    },
  ];
};

export default useContactsList;
