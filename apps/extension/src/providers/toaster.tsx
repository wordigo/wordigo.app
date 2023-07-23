import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@wordigo/ui/components/ui/toast"
import { useToast } from "@wordigo/ui/components/ui/use-toast"

export function CToaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle className="text-primary">{title}</ToastTitle>}
              {description && <ToastDescription className="text-primary">{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
