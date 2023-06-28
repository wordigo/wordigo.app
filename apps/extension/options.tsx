import { Button, Input, ToastAction, Toaster, useToast } from "@acme/ui"

// import "@acme/ui/styles/globals.css"

export const ToastDemo = () => {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
    })
  }

  return (
    <div>
      <Toaster />
      <Button onClick={showToast}>Show Toast</Button>
      <Input placeholder="Hello World" />
    </div>
  )
}

export default ToastDemo
