import homeSidebarNavigations from "./navigation.constant";
import { cn } from "@wordigo/ui/lib/utils";
import Link from "next/link";

const Navigation = ({ variant }: { variant?: "borgerMenu" }) => {
  const classes = cn(
    "w-full",
    variant === "borgerMenu" ? "flex-col flex" : "flex items-center gap-6"
  );

  return (
    <ul className="flex items-center mt-1 w-full">
      <li className={cn(classes)}>
        <Navigation.Item variant={variant} />
      </li>
    </ul>
  );
};

Navigation.Item = ({ variant }: { variant: string }) => {
  const navigations = homeSidebarNavigations();

  const checkActive = (href: string) => {
    if (typeof window !== "undefined") {
      if (href.includes("#")) {
        href = href.split("#")[0];
      }

      return window.location.pathname === href;
    }
    return false;
  };

  const classes_hover = cn(
    variant === "borgerMenu" ??
      "hover:text-foreground text-muted-foreground flex item-center"
  );

  return (
    <>
      {navigations.map((item, index) => [
        <Link
          href={item.href}
          passHref
          key={index}
          className={cn(
            "flex items-center w-full transition-colors text-gray-600 dark:text-white dark:hover:text-opacity-60 text-sm hover:text-accent-foreground group relative",
            variant === "borgerMenu" &&
              "p-3  rounded-[6px] hover:bg-[#F8FAFC] dark:hover:bg-[#101929] mb-1",
            classes_hover,
            checkActive(item.href) &&
              "text-accent-foreground bg-[#F8FAFC] dark:bg-[#101929] md:bg-transparent md:dark:bg-transparent md:text-muted-foreground md:dark:text-muted-foreground md:group-hover:bg-transparent md:group-hover:dark:bg-transparent md:group-hover:text-accent-foreground md:group-hover:dark:text-accent-foreground"
          )}
        >
          {item.icon}
          {item.title}
        </Link>,
      ])}
    </>
  );
};

export default Navigation;
