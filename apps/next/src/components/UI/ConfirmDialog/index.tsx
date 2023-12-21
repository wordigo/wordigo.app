import CButton from "../Button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import { type PropsWithChildren } from "react";

export interface IConfirmModalProps extends PropsWithChildren {
  onConfirm: () => void;
  title?: string;
  loading?: boolean;
}

export function ConfirmModal({
  children,
  onConfirm,
  loading,
}: IConfirmModalProps) {
  const { t } = useTranslation();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("confirm-dialog.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("confirm-dialog.description")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>
            {t("buttons.cancel")}
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <CButton onClick={onConfirm} loading={loading} disabled={loading}>
              {t("buttons.continue")}
            </CButton>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
