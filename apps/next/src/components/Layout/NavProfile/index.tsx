import Link from "next/link";
import { useAuthStore } from "@/hooks/useAuthStore";
import { LogOut } from "lucide-react";

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

const NavProfile = ({ variant }: { variant?: "dashboard" }) => {
  const { user, logout } = useAuthStore();

  const splittedText = user?.user_metadata.name?.split(" ") || ([] as string[]);
  const computedName = splittedText?.[0]?.[0] + splittedText?.[1]?.[0];

  return (
    <DropdownMenu>
      <>
        {variant ? (
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="w-full justify-between relative h-fit focus-visible:ring-0 focus-visible:ring-offset-0">
              <div className="flex items-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage className="h-10 w-10" src={user?.user_metadata.avatar_url} alt={"@" + user?.user_metadata.name} />
                  <AvatarFallback>{computedName}</AvatarFallback>
                </Avatar>

                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold leading-5 text-start">{user?.user_metadata.full_name}</p>
                    <p className="text-sm font-normal leading-5 text-muted-foreground">{"@username"}</p>
                  </div>
                </DropdownMenuLabel>
              </div>

              <div>
                <DropdownMenuLabel className="text-gray-400 right-0 hover:!text-red-500" onClick={logout}>
                  <LogOut size={"20"} />
                </DropdownMenuLabel>
              </div>
            </Button>
          </DropdownMenuTrigger>
        ) : (
          <DropdownMenuTrigger>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.user_metadata.avatar_url} alt={"@" + user?.user_metadata.name} />
                <AvatarFallback>{computedName}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
        )}
      </>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.user_metadata.full_name}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.user_metadata.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Premium</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 hover:!text-red-500" onClick={logout}>
          Log out
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
