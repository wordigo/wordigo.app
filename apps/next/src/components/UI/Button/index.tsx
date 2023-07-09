import { Fragment, type PropsWithChildren } from "react";
import { RotateCw } from "lucide-react";

import { Button, type ButtonProps } from "@wordigo/ui";

type CButtonProps = ButtonProps & { loading?: boolean };

const CButton = ({ children, loading, ...attr }: PropsWithChildren<CButtonProps>) => {
  return (
    <Button disabled={loading} {...attr}>
      {loading ? (
        <Fragment>
          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Fragment>
      ) : (
        children
      )}
    </Button>
  );
};

export default CButton;
