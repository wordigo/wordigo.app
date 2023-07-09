import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import LanguageSelector from "@wordigo/ui/components/ui/language-selector";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    router.replace(router.pathname, router.pathname, { locale });
  };

  return <LanguageSelector defaultValue={i18n.language} onSelect={handleChangeLocale} className="w-[150px] !h-9" />;
};

export default ChangeLanguage;