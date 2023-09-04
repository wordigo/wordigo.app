import { AlignCenter, Banknote, HelpCircle, Info, Library } from "lucide-react";
import { useTranslation } from "next-i18next";
import { type ReactElement } from "react";

export interface IHomeNavbar {
  title: string;
  href?: string;
  icon: ReactElement;
  disabled?: string;
}

const homeSidebarNavigations = (): IHomeNavbar[] => {
  const { t } = useTranslation();

  return [
    {
      title: t("navbar.features"),
      href: "/#features",
      icon: <AlignCenter className="mr-2 w-5 h-5 lg:hidden" />,
    },
    {
      title: t("navbar.library"),
      href: "/library",
      icon: <Library className="mr-2 w-5 h-5 lg:hidden" />,
    },
    {
      title: t("navbar.about"),
      href: "/about",
      icon: <Info className="mr-2 w-5 h-5 lg:hidden" />,
    },
    {
      title: t("faq.nav"),
      href: "/faq",
      icon: <HelpCircle className="mr-2 w-5 h-5 lg:hidden" />,
    },
  ];
};

export default homeSidebarNavigations;
