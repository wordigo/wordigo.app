import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@wordigo/ui"
import { cn } from "@wordigo/ui/lib/utils"
import { Volume2 } from "lucide-react"
import { useRef } from "react"

import { getLocalMessage } from "~utils/locale"

const AuidoPlayer = ({ message, targetLanguage, className }: { message: string; targetLanguage: string; className?: string }) => {
  const playerRef = useRef<HTMLAudioElement>()

  const textToSpeech = () => {
    if (message) void playerRef?.current?.play()
  }

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(message)}`

  return (
    <div>
      <audio src={computedUrl} ref={playerRef} />
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={textToSpeech} className={cn("!w-7 !h-7 text-accent-foreground", className)} variant="ghost" size="icon">
              <Volume2 size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="!py-0.5">
            <p>{getLocalMessage("text_to_speech")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default AuidoPlayer
