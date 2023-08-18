import { useContextPopover } from "../context/popover";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";
import { Volume2 } from "lucide-react";

const AuidoPlayer = () => {
  const { playerRef } = useContextPopover();

  const textToSpeech = () => {
    void playerRef?.current?.play();
  };

  return (
    <div>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={textToSpeech}
              className="!w-7 !h-7 text-accent-foreground dark:text-accent"
              variant="ghost"
              size="icon"
            >
              <Volume2 size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="!py-0.5">
            <p>Text to speech</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default AuidoPlayer;
