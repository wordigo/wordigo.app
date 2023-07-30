import { useTranslation } from "next-i18next";

export interface IContact {
  title: string;
  description: string;
  link_name: string;
  href: string;
}

const useContactsList = (): IContact[] => {
  const { t } = useTranslation();

  return [
    {
      href: "mailto:noreply@wordigo.com",
      title: t("contact.mail_title"),
      description: t("contact.mail_description"),
      link_name: t("contact.mail_link"),
    },
  ];
};

export default useContactsList;
