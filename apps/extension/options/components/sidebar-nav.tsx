import { buttonVariants } from "@wordigo/ui"
import { cn } from "@wordigo/ui/lib/utils"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    tab: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <button
          key={item.tab}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            item.tab ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            "justify-start"
          )}>
          {item.title}
        </button>
      ))}
    </nav>
  )
}
