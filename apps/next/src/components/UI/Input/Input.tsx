import { type ReactElement } from "react";
import { cx } from "class-variance-authority";

import { Input } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export interface CInputProps {
  leftSection?: ReactElement;
  rightSection?: ReactElement;
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & CInputProps;

const CInput = ({ leftSection, rightSection, ...props }: InputProps) => {
  const classes = cn({
    "block w-full bg-transparent border-0 pl-1 py-0 pb-0.5": true,
  });

  return (
    <div className="flex items-center rounded-md border-[1px] !border-input">
      {leftSection && <div className="py-2 px-3 inline-flex min-w-fit items-center pointer-events-none pr-0 bg-input">{leftSection}</div>}
      <Input className={classes} {...props} />
    </div>
  );
};

export default CInput;
