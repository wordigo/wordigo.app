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
      <DropdownMenuTrigger asChild>
        <div className="flex items-center bg-background select-none">
          <Button variant={"navProfil"} className="w-full justify-between relative h-fit focus-visible:ring-0 focus-visible:ring-offset-0">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage className="h-10 w-10" src={data?.user.avatar_url} alt={"@" + data?.user.name} />
                <AvatarFallback>{computedName}</AvatarFallback>
              </Avatar>

              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold leading-5 text-start">{data?.user.name}</p>
                  <p className="text-sm font-normal leading-5 text-muted-foreground">{"@username"}</p>
                </div>
              </DropdownMenuLabel>
            </div>
          </Button>
          <div className="z-40">
            <DropdownMenuLabel className="text-gray-400 right-0 hover:!text-red-500" onClick={() => signOut()}>
              <LogOut size={"20"} />
            </DropdownMenuLabel>
          </div>
        </div>
      </DropdownMenuTrigger>
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
