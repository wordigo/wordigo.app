import { Button, ButtonProps } from "../ui/button";
import { PropsWithChildren } from "react";

const FloatingButton = ({ children, ...attr }: PropsWithChildren<ButtonProps>) => (
  <Button {...attr} className="!ui-flex !ui-h-7 !ui-items-center !ui-gap-x-1 ui-rounded-none !ui-px-1 ui-text-sm ui-font-normal text-accent-foreground" variant="ghost" size="sm">
    {children}
  </Button>
);

export default FloatingButton;
