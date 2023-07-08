import * as React from "react";
import { GithubIcon, GitlabIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

import { Button } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="max-w-[1760px] m-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <GitlabIcon />
          <p className="text-center text-sm leading-loose md:text-left">
            © Copyright 2023. All Rights Reserved by
            <a href={"/"} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4 ml-1">
              Wordigo
            </a>
            .
          </p>
        </div>
        <div>
          <div className="space-x-2">
            <Button variant="link" size="icon">
              <InstagramIcon size={14} />
            </Button>
            <Button variant="link" size="icon">
              <TwitterIcon size={14} />
            </Button>
            <Button variant="link" size="icon">
              <GithubIcon size={14} />
            </Button>
            <Button variant="link" size="icon">
              <YoutubeIcon size={14} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
