import { Button, type ButtonProps } from "@wordigo/ui";
import { RotateCw } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Fragment, type PropsWithChildren } from "react";

type CButtonProps = ButtonProps & { loading?: boolean };

const CButton = ({
  children,
  loading,
  ...attr
}: PropsWithChildren<CButtonProps>) => {
  const { t } = useTranslation();

  return (
    <Button disabled={loading} {...attr}>
      {loading ? (
        <Fragment>
          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
          {t("general.loading")}
        </Fragment>
      ) : (
        children
      )}
    </Button>
  );
};

export default CButton;
