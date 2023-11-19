import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@wordigo/ui";
import { Share2Icon } from "lucide-react";
import React, { PropsWithChildren } from "react";
import { BsLink45Deg, BsLinkedin, BsTwitter } from "react-icons/bs";
import { LinkedinShareButton, TwitterShareButton } from "react-share";
import { IDictionary } from "types/global";

const SocialShare = ({ title, slug }: IDictionary) => {
  const host =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const url = `${host}/topic/${slug}`;

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url as string);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" size="icon">
          <Share2Icon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <TwitterShareButton
            className="w-full flex gap-x-2 items-center"
            url={url as string}
            title={title}
          >
            <BsTwitter />
            twitter da paylaş
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LinkedinShareButton
            className="w-full flex gap-x-2 items-center"
            url={url as string}
            source="DevSözlük"
            title={title}
          >
            <BsLinkedin />
            linkedin da paylaş
          </LinkedinShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyToClipboard}>
          <BsLink45Deg />
          linki kopyala
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export type ItemProps = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default SocialShare;
