interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div>
      <div className="flex justify-between px-2 flex-col w-full">
        <div className="grid gap-1">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{heading}</h2>
          {text && <p className="text-lg text-muted-foreground">{text}</p>}
        </div>
        {children}
      </div>
    </div>
  );
}
