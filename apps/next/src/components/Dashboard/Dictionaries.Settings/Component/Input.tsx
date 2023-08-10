import { type ReactElement, useState } from "react";

import { Input, ToastAction, useToast } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export interface CInputProps {
  leftSection?: ReactElement;
  rightSection?: ReactElement;
  classNames?: string;
  links: string;
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & CInputProps;

const CInput = ({ classNames, links, leftSection, rightSection, ...props }: InputProps) => {
  const [copy, setCopy] = useState(false);
  const { toast } = useToast();

  const classes = cn({
    "block w-full bg-transparent border-0 pl-2 py-0 pb-0.5 !opacity-80": true,
  });

  const copyLink = () => {
    void navigator.clipboard.writeText(links);
    setCopy(true);

    toast({
      title: "Successful",
      description: "Copy successful.",
      action: (
        <ToastAction className="text-primary" altText="">
          View Dictionary
        </ToastAction>
      ),
    });

    setTimeout(() => {
      setCopy(false);
    }, 100);
  };

  return (
    <div className={cn("flex items-center rounded-md border-[1px] !border-input", classNames)}>
      {leftSection && (
        <div className="py-2.5 px-3 !cursor-pointer inline-flex min-w-fit items-center pointer-events-none !border-r-input !border-r-[1px]">
          {leftSection}
        </div>
      )}
      <Input className={classes} {...props} />
      {rightSection && (
        <div className="py-2.5 px-3 bg-[#E2E8F0] rounded-md !cursor-pointer inline-flex min-w-fit items-center" onClick={copyLink}>
          {rightSection}
        </div>
      )}
    </div>
  );
};

export default CInput;
