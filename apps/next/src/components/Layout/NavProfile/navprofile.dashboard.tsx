import { BookMarked, LayoutDashboard, Link, LogOut, Settings } from "lucide-react";
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

const NavProfile = () => {
  const { data } = useSession();
  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const handleSignOut = () => signOut({ callbackUrl: "/" });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="dark:bg-[#101929] m-auto shadow px-2 h-fit rounded-md w-[220px] flex items-center justify-between select-none cursor-default relative focus-visible:ring-0 focus-visible:ring-offset-0">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src={data?.user.avatar_url} alt={"@" + data?.user.name} />
                <AvatarFallback>{computedName}</AvatarFallback>
              </Avatar>
            </Avatar>

            <div className="flex flex-col text-start">
              <p className="text-sm font-medium leading-none max-w-[152px] truncate mb-1">{data?.user.name}</p>
              <p className="text-xs leading-none text-muted-foreground max-w-[152px] truncate">{"@" + data?.user.username}</p>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-full py-1")}>
        <DropdownMenuLabel className="font-normal flex items-center">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{data?.user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div className="px-[10px] text-sm focus:bg-transparent py-[4px] flex items-center justify-between">
            <p className="mr-3">Theme</p>
            <ThemeMode />
          </div>
          <div className="px-[10px] text-sm focus:bg-transparent py-[4px] flex items-center justify-between">
            <p className="mr-3">Language</p>
            <ChangeLanguage />
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 text-sm hover:!text-red-500 px-[10px] py-[4px]" onClick={() => handleSignOut}>
          <LogOut className="w-4 mr-1 ml-[2px]" />
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
