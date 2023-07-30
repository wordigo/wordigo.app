import Link from "next/link";
import { BarChart, BookMarked, GemIcon, HomeIcon, LayoutDashboard, LibraryIcon, LogOut, Settings } from "lucide-react";
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

const NavProfile = () => {
  const { data } = useSession();

  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={data?.user.avatar_url} alt={"@" + data?.user.name} />
            <AvatarFallback>{computedName}</AvatarFallback>
          </Avatar>
        </Button>
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
        <DropdownMenuItem className="text-red-400 hover:!text-red-500 px-[10px] py-[4px]" onClick={() => signOut()}>
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
