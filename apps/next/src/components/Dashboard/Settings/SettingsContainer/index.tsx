import { Separator } from "@wordigo/ui";
import React from "react";
import { useTranslation } from "react-i18next";

export interface IProps {
  children?: React.ReactNode;
  tTitle: string;
  tDescription: string;
}

export default function index({ children, tTitle, tDescription }: IProps) {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <div className="mt-5">
        <h3 className="text-lg font-medium">{t(tTitle)}</h3>
        <p className="text-sm text-muted-foreground">{t(tDescription)}</p>
      </div>
      <Separator />
      {children}
    </div>
  );
}
