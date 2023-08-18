import Link from "next/link";
import { cn } from "@wordigo/ui/lib/utils";
import homeSidebarNavigations from "./navigation.constant"

const Navigation = ({ variant }: { variant?: "borgerMenu" }) => {
  const classes = cn("w-full", variant === "borgerMenu" ? "flex-col flex" : "flex items-center gap-3");

  return (
    <ul className="flex items-center font-sm mt-1  w-full">
      <li className={cn(classes)}>
        <Navigation.Item variant={variant} />
      </li>
    </ul>
  );
};

Navigation.Item = ({ variant }: { variant: string }) => {
  const navigations = homeSidebarNavigations();

  const classes_hover = cn(variant === "borgerMenu" ? "hover:text-foreground text-muted-foreground flex item-center" : "");

  return (
    <>
      {navigations.map((item, index) => [
        <div key={index} className={cn("flex items-center w-full transition-colors text-muted-foreground text-sm hover:text-accent-foreground font-medium group relative", variant === "borgerMenu" && "p-3  rounded-[6px] hover:bg-[#F8FAFC] dark:hover:bg-[#101929] mb-1")}>
          <Link
            href={item.href}
            passHref
            className={cn(classes_hover)}
          >
            {item.icon}
            {item.title}
          </Link>
        </div>
      ])}
    </>
  )
}

export default Navigation;
