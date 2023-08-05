import React from "react";
import { useTranslation } from "next-i18next";
import { cn } from "@wordigo/ui/lib/utils";

interface ITranslateComponent {
  className?: string;
  head: string;
}

const TranslateComponent: React.FC<ITranslateComponent> = ({ className, head, ...props }) => {
  const { t } = useTranslation();
  return (
    <h1 className={cn(className)} {...props}>
      {t("dictionaries.title")}
    </h1>
  );
};
TranslateComponent.displayName = "TranslateComponent";

export { TranslateComponent };
