import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import LanguageSelector from "@wordigo/ui/components/ui/language-selector";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    void router.replace(router.pathname, router.pathname, { locale: locale.toUpperCase() });
  };

  return <LanguageSelector defaultValue={i18n.language?.toUpperCase()} onSelect={handleChangeLocale} className="w-[150px] !h-9" />;
};

export default ChangeLanguage;
