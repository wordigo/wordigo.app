import ChangeLanguage from "../MainLayout/ChangeLanguage";
import ThemeMode from "../ThemeMode";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
} from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Fragment } from "react";

const NavProfile = ({
  variant,
  className,
}: {
  variant?: "borgerMenu";
  className?: string;
}) => {
  const { t } = useTranslation();
  const { data } = useSession();

  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName =
    (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("rounded-full", className)} asChild>
        <Button
          variant="ghost"
          className={cn(
            "relative h-10 w-10 rounded-full",
            variant === "borgerMenu" && "w-fit h-fit gap-x-1 !px-2"
          )}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={data?.user.avatar_url}
              alt={"@" + data?.user.name}
            />
            <AvatarFallback>{computedName}</AvatarFallback>
          </Avatar>
          {variant === "borgerMenu" && (
            <div className="flex flex-col ml-2">
              <p className="text-sm font-semibold leading-5 text-start text-black dark:text-white">
                {data?.user.name}
              </p>
              <p className="text-sm font-normal leading-5 text-muted-foreground max-w-[140px] overflow-hidden truncate">
                {data?.user.email}
              </p>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={cn("w-[200px] py-0.5")}>
        <DropdownMenuLabel className="font-normal flex items-center">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {data?.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {data?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="px-[10px] cursor-pointer">
            {/* <LayoutDashboard className="w-4 mr-2" /> */}
            <Link className="w-full h-full" href={"/dashboard"}>
              {t("navbar.dashboard")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] cursor-pointer">
            {/* <BookMarked className="w-4 mr-2" /> */}
            <Link className="w-full h-full" href={"/dashboard/dictionaries"}>
              {t("navbar.dictionaries")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] cursor-pointer">
            {/* <Settings className="w-4 mr-2" /> */}
            <Link className="w-full h-full" href={"/dashboard/settings"}>
              {t("navbar.settings")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <div className="px-[10px] text-sm focus:bg-transparent py-[4px] flex items-center justify-between">
          <p className="mr-3">{t("general.theme")}</p>
          <ThemeMode />
        </div>

        <div className="px-[10px] text-sm focus:bg-transparent py-[4px] flex items-center justify-between">
          <p className="mr-3">{t("general.language")}</p>
          <ChangeLanguage />
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-400 cursor-pointer hover:!text-red-500 px-[10px] py-[5px]"
          onClick={() => signOut()}
        >
          <div>{t("navbar.logout")}</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

NavProfile.Loader = () => {
  return (
    <Fragment>
      <Skeleton className="w-32 h-8" />
      <div className="hidden md:block w-[0.5px] h-7 bg-gray-100 dark:bg-gray-700 animate-pulse"></div>
      <Skeleton className="w-10 h-10 rounded-full" />
    </Fragment>
  );
};

export default NavProfile;
