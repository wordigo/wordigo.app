import ChangeLanguage from "../../MainLayout/ChangeLanguage";

interface DashboardHeaderProps {
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({ text, children }: DashboardHeaderProps) {
  return (
    <div>
      <div className="flex justify-between px-2 flex-col w-full">
        <div className="grid gap-1">{text && <p className="text-lg text-muted-foreground">{text}</p>}</div>
        {children}
      </div>
    </div>
  );
}
