import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@acme/ui"
import { Languages } from "lucide-react"

import { getPopupCordinate } from "~utils"

import { useContextPopover } from "../context/popover"

const FloatingButton = () => {
  const { cordinate, setFloating, setPopup } = useContextPopover()
  const { top, left } = getPopupCordinate(cordinate)

  const handleTogglePopup = () => {
    setFloating(false)
    setPopup(true)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="absolute font-bold !h-8 !w-8 text-gray-600"
            variant="secondary"
            onClick={handleTogglePopup}
            style={{ top, left }}
            size="icon">
            <Languages size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="!text-sm">Translate selection text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default FloatingButton
