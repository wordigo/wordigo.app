import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, Skeleton } from "@wordigo/ui";

const NavProfile = () => {
  const { data } = useSession();
  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const handleSignOut = () => signOut({ callbackUrl: "/" });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-between items-center">
          <button className="w-full justify-between select-none cursor-default relative h-fit focus-visible:ring-0 focus-visible:ring-offset-0">
            <div className="flex items-center gap-x-1">
              <Avatar className="h-12 w-12">
                <AvatarImage className="h-12 w-12" src={data?.user.avatar_url} alt={"@" + data?.user.name} />
                <AvatarFallback>{computedName}</AvatarFallback>
              </Avatar>

              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold leading-5 text-start">{data?.user.name}</p>
                  <p className="text-sm font-normal leading-5 text-muted-foreground">{data?.user.email}</p>
                </div>
              </DropdownMenuLabel>
            </div>
          </button>
          <div className="z-40">
            <DropdownMenuLabel className="text-gray-400 right-0 hover:!text-red-500" onClick={handleSignOut}>
              <LogOut size={"20"} className="cursor-pointer" />
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
