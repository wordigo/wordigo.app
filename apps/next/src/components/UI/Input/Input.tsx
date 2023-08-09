import { type ReactElement } from "react";

import { Input } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export interface CInputProps {
  leftSection?: ReactElement;
  rightSection?: ReactElement;
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & CInputProps;

const CInput = ({ leftSection, rightSection, ...props }: InputProps) => {
  const classes = cn({
    "block w-full bg-transparent border-0 pl-2 py-0 pb-0.5 !opacity-80": true,
  });

  return (
    <div className="flex items-center rounded-md border-[1px] !border-input">
      {leftSection && (
        <div className="py-2.5 px-3 !cursor-pointer inline-flex min-w-fit items-center pointer-events-none !border-r-input !border-r-[1px]">
          {leftSection}
        </div>
      )}
      <Input className={classes} {...props} />
      {rightSection && <div className="py-2.5 px-3 !cursor-pointer inline-flex min-w-fit items-center">{rightSection}</div>}
    </div>
  );
};

export default CInput;
