import { Button } from "baseui/button"
import { Volume2 } from "lucide-react"
import { useRef } from "react"

import CTooltip from "~components/CTooltip"
import { getLocalMessage } from "~utils/locale"

const AuidoPlayer = ({ message, targetLanguage }: { message: string; targetLanguage: string }) => {
  const playerRef = useRef<HTMLAudioElement>()

  const textToSpeech = () => {
    if (message) void playerRef?.current?.play()
  }

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(message)}`

  return (
    <div>
      <audio src={computedUrl} ref={playerRef} />
      <CTooltip content={getLocalMessage("text_to_speech")}>
        <Button onClick={textToSpeech} kind="secondary" size="mini">
          <Volume2 size={16} />
        </Button>
      </CTooltip>
    </div>
  )
}

export default AuidoPlayer
