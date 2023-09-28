import { Button } from "baseui/button"
import { Copy } from "lucide-react"
import { useState } from "react"

import CTooltip from "~components/CTooltip"
import { getLocalMessage } from "~utils/locale"

const CopyTranslatedText = ({ text }: { text: string }) => {
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false)

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText(text)
    setCopiedStatus(true)
    setTimeout(() => setCopiedStatus(false), 700)
  }

  return (
    <CTooltip content={copiedStatus ? getLocalMessage("translation_copied") : getLocalMessage("translation_copy")}>
      <Button onClick={copyTranslatedText} kind="secondary" size="mini">
        <Copy size={14} />
      </Button>
    </CTooltip>
  )
}

export default CopyTranslatedText
