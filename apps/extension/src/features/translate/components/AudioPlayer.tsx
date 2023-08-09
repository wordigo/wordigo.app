import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@wordigo/ui"
import { Volume2 } from "lucide-react"
import { useRef } from "react"

import { useContextPopover } from "../context/popover"

const AuidoPlayer = ({ text, translatedText }: { text: string; translatedText: string }) => {
  const playerRef = useRef<HTMLAudioElement>()
  const { targetLanguage } = useContextPopover()

  const textToSpeech = () => {
    void playerRef?.current?.play()
  }

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(
    text
  )}`

  return (
    <div>
      <audio src={computedUrl} ref={playerRef} />
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={textToSpeech} className="!h-9 !w-9" variant="outline" size="icon">
              <Volume2 size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="!py-0.5">
            <p>Text to speech</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default AuidoPlayer
