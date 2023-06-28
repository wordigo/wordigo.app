import { MainNav } from "@/components/header";

import { Badge, Button, Input, ToastAction, useToast } from "@acme/ui";

export const ToastDemo = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };

  return (
    <div>
      <MainNav />
      <Badge variant="default">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, at.
      </Badge>
      <Button onClick={showToast}>Show Toast</Button>
      <Input placeholder="Hello World" />
    </div>
  );
};

export default ToastDemo;
