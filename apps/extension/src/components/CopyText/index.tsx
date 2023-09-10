import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@wordigo/ui"
import { cn } from "@wordigo/ui/lib/utils"
import { Copy } from "lucide-react"
import { useState } from "react"

import { getLocalMessage } from "~utils/locale"

const CopyTranslatedText = ({ text, className }: { text: string; className?: string }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false)

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText(text)
    setCopiedStatus(true)
    setTimeout(() => setCopiedStatus(false), 700)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={visible}>
        <TooltipTrigger onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} onClick={copyTranslatedText} asChild>
          <Button className={cn("!w-7 !h-7 text-accent-foreground variant", className)} variant="ghost" size="icon">
            <Copy size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!py-0.5">
          <p>{copiedStatus ? getLocalMessage("translation_copied") : getLocalMessage("translation_copy")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CopyTranslatedText
