import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@wordigo/ui";
import { Volume2 } from "lucide-react";
import { useRef } from "react";
import { usePopoverStore } from "~stores/popover";

const AuidoPlayer = () => {
  const { targetLanguage, selectedText } = usePopoverStore();
  const playerRef = useRef<HTMLAudioElement>();

  const textToSpeech = () => {
    void playerRef?.current?.play();
  };

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(selectedText)}`;

  return (
    <div>
      <audio src={computedUrl} ref={playerRef} />
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={textToSpeech} className="!w-7 !h-7 text-accent-foreground dark:text-accent" variant="ghost" size="icon">
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
