import { buttonVariants } from "@wordigo/ui"
import { cn } from "@wordigo/ui/lib/utils"

import { useOptionsContext } from "~options/context/options"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    tab: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { activeTab, setActiveTab } = useOptionsContext()

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <button
          key={item.tab}
          onClick={() => handleChangeTab(item.tab)}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            item.tab === activeTab ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            "justify-start"
          )}>
          {item.title}
        </button>
      ))}
    </nav>
  )
}
