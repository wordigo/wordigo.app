import { useState } from "react";
import { BookMarked, ChevronDown, ChevronUp, LayoutDashboard, Link, LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
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

const NavProfile = () => {
  const { data } = useSession();
  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const handleSignOut = () => signOut({ callbackUrl: "/" });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="dark:bg-[#161e2b] bg-gray-500 border border-transparent px-2 py-1 rounded-md w-[220px] flex items-center justify-between select-none cursor-default relative h-fit focus-visible:ring-0 focus-visible:ring-offset-0 ">
          <div className="flex items-center">
            <Avatar className="h-12 w-12">
              <AvatarImage className="h-12 w-12" src={data?.user.avatar_url} alt={"@" + data?.user.name} />
              <AvatarFallback>{computedName}</AvatarFallback>
            </Avatar>

            <DropdownMenuLabel>
              <div className="flex flex-col text-start">
                <p className="text-sm font-semibold leading-5 text-start max-w-[117px] truncate">{data?.user.name}</p>
                <p className="text-sm font-normal leading-5 text-muted-foreground max-w-[117px] truncate">{"@" + data?.user.username}</p>
              </div>
            </DropdownMenuLabel>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-full")}>
        <DropdownMenuLabel className="font-normal flex items-center">
          <Avatar className="h-10 w-10 mr-2">
            <AvatarImage className="h-10 w-10" src={data?.user.avatar_url} alt={"@" + data?.user.name} />
            <AvatarFallback>{computedName}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{data?.user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="px-[10px] py-[4px]">
            <LayoutDashboard className="w-4 mr-2" />
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] py-[4px]">
            <BookMarked className="w-4 mr-2" />
            <Link href="/dashboard/dictionaries">Dictionaries</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="px-[10px] py-[4px]">
            <Settings className="w-4 mr-2" />
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 hover:!text-red-500 px-[10px] py-[4px]" onClick={() => handleSignOut}>
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
