import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@wordigo/ui/components/ui/toast";
import { useToast } from "@wordigo/ui/components/ui/use-toast";
import { cn } from "@wordigo/ui/lib/utils";

export function CToaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, variant, ...props }) => {
        return (
          <Toast id="el-translate-container" key={id} variant={variant} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle className={cn("text-primary", variant === "destructive" ? "!text-white" : "")}>{title}</ToastTitle>}
              {description && <ToastDescription className={cn("text-primary", variant === "destructive" ? "!text-white" : "")}>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
