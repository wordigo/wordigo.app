import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@wordigo/ui"
import { motion } from "framer-motion"
import { LanguagesIcon } from "lucide-react"

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
          <motion.div
            tabIndex={50}
            className="absolute cursor-pointer z-50"
            initial={{
              top: top - 5,
              left
            }}
            animate={{
              top: top + 15,
              left
            }}>
            <Button className="font-bold !h-8 !w-8" variant="default" onClick={handleTogglePopup} size="icon">
              <LanguagesIcon size={18} />
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="!text-sm">Translate selection text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default FloatingButton
