import { type AvatarProps } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@wordigo/ui";
import { UserIcon } from "lucide-react";

interface UserAvatarProps extends AvatarProps {
  user: Pick<any, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="ui-sr-only">{user.name}</span>
          <UserIcon className="ui-h-4 ui-w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
