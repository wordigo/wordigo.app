import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@wordigo/ui";
import { Share2Icon } from "lucide-react";
import { useTranslation } from "next-i18next";
import React, { PropsWithChildren } from "react";
import { BsLink45Deg, BsLinkedin, BsTwitter } from "react-icons/bs";
import { LinkedinShareButton, TwitterShareButton } from "react-share";
import { IDictionary } from "types/global";

const SocialShare = ({ title, slug }: IDictionary) => {
  const { t } = useTranslation();
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
            related={["wordigoapp"]}
            className="w-full flex gap-x-2 items-center"
            url={url as string}
            title={title}
            hashtags={["wordigo", "dictionary"]}
          >
            <BsTwitter />
            {t("share.twitter")}
          </TwitterShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LinkedinShareButton
            className="w-full flex gap-x-2 items-center"
            url={url as string}
            source="Wordigo"
            title={title}
          >
            <BsLinkedin />
            {t("share.linkedin")}
          </LinkedinShareButton>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="w-full flex gap-x-2 items-center cursor-pointer"
          onClick={copyToClipboard}
        >
          <BsLink45Deg />
          {t("share.link_copy")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export type ItemProps = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default SocialShare;
