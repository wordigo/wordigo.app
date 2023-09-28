import { Button } from "baseui/button"
import { ChevronDown } from "lucide-react"

import CTooltip from "~components/CTooltip"
import { useAuthStore } from "~stores/auth"
import { getLocalMessage } from "~utils/locale"

import DictionarySelector from "./DictionarySelector"

const SaveDictionary = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const { isLoggedIn } = useAuthStore()

  if (isLoggedIn) return <DictionarySelector sourceLangauge={sourceLangauge} translatedText={translatedText} />
  else {
    return (
      <CTooltip content={getLocalMessage("you_need_login")}>
        <Button size="mini">
          {getLocalMessage("save_to_libraray")}
          <ChevronDown size={16} />
        </Button>
      </CTooltip>
    )
  }
}

export default SaveDictionary
