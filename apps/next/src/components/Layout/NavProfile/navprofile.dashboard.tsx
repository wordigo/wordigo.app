import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage, Skeleton } from "@wordigo/ui";

const NavProfile = () => {
  const { data } = useSession();
  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const handleSignOut = () => signOut({ callbackUrl: "/" });

  return (
    <div className="m-auto px-2 mt-7 h-fit rounded-md w-[220px] flex items-center justify-between select-none cursor-default relative focus-visible:ring-0 focus-visible:ring-offset-0">
      <span className="flex items-center">
        <Avatar className="h-10 w-10 mr-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={data?.user.avatar_url} alt={"@" + data?.user.name} />
            <AvatarFallback>{computedName}</AvatarFallback>
          </Avatar>
        </Avatar>

        <div className="flex flex-col text-start">
          <p className="text-sm font-medium leading-none max-w-[122px] truncate mb-1">{data?.user.name}</p>
          <p className="text-xs leading-none text-muted-foreground max-w-[122px] truncate">{"@" + data?.user.username}</p>
        </div>
      </span>

      <LogOut className="text-red-500 hover:text-red-400" onClick={handleSignOut} />
    </div>
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
