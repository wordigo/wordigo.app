import LanguageSelector from "@wordigo/ui/components/ui/language-selector";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleChangeLocale = (locale: string) => {
    void router.replace(
      { pathname: router.pathname, query: router.query },
      undefined,
      { locale: locale.toLowerCase() }
    );
  };

  return (
    <LanguageSelector
      defaultValue={i18n.language?.toUpperCase()}
      onSelect={handleChangeLocale}
      className="text-xs !h-7"
    />
  );
};

export default ChangeLanguage;
