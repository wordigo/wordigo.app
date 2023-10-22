import LanguageSelector from "@wordigo/ui/components/ui/language-selector";
import { cn } from "@wordigo/ui/lib/utils";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ChangeLanguage = ({ className }: { className?: string }) => {
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
      className={cn("text-xs !h-7", className)}
    />
  );
};

export default ChangeLanguage;
