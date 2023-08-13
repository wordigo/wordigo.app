import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

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

import ChangeLanguage from "../MainLayout/ChangeLanguage";
import ThemeMode from "../ThemeMode";

const NavProfile = ({ variant }: { variant: "borgerMenu" }) => {
  const { data } = useSession();

  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full" asChild>
        <Button variant="ghost" className={cn("relative h-10 w-10 rounded-full", variant === "borgerMenu" && "w-fit h-fit")}>
          <Avatar className="h-10 w-10">
            <AvatarImage src={data?.user.avatar_url} alt={"@" + data?.user.name} />
            <AvatarFallback>{computedName}</AvatarFallback>
          </Avatar>
          {variant === "borgerMenu" && (
            <div className="flex flex-col ml-2">
              <p className="text-sm font-semibold leading-5 text-start text-black dark:text-white">{data?.user.name}</p>
              <p className="text-sm font-normal leading-5 text-muted-foreground max-w-[140px] overflow-hidden truncate">{data?.user.email}</p>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={cn("w-full py-0.5")}>
        <DropdownMenuLabel className="font-normal flex items-center">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{data?.user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="px-[10px]">
            {/* <LayoutDashboard className="w-4 mr-2" /> */}
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px]">
            {/* <BookMarked className="w-4 mr-2" /> */}
            <Link href="/dashboard/dictionaries">Dictionaries</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px]">
            {/* <Settings className="w-4 mr-2" /> */}
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <div className="px-[10px] text-sm focus:bg-transparent py-[4px] flex items-center justify-between">
          <p className="mr-3">Theme</p>
          <ThemeMode />
        </div>

        <div className="px-[10px] text-sm focus:bg-transparent py-[4px] flex items-center justify-between">
          <p className="mr-3">Language</p>
          <ChangeLanguage />
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 cursor-pointer hover:!text-red-500 px-[10px] py-[5px]" onClick={() => signOut()}>
          <div>Log out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

NavProfile.Loader = () => {
  return (
    <div className="flex items-end space-x-4 flex-col gap-y-2">
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
  );
};

export default NavProfile;
