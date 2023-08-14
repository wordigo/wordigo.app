import { Button, TooltipProvider, type ButtonProps } from "@wordigo/ui"
import { motion } from "framer-motion"
import { BookMarked, Languages, MoreVertical, Volume2 } from "lucide-react"
import type { PropsWithChildren } from "react"

import { getPopupCordinate } from "~utils"

import { useContextPopover } from "../context/popover"
import Logo from "./Logo"

const Floating = () => {
  const { cordinate, setFloating, setPopup } = useContextPopover()
  const { top, left } = getPopupCordinate(cordinate)

  const handleTogglePopup = () => {
    setFloating(false)
    setPopup(true)
  }

  return (
    <TooltipProvider>
      <motion.div
        tabIndex={500}
        id="el-popup-container"
        className="absolute cursor-pointer z-50"
        initial={{
          top: top + 10,
          left: left - 50
        }}
        animate={{
          top: top + 5,
          left: left - 120
        }}>
        <div className="border-gray-200 shadow-md flex items-center space-x-1 rounded !font-thin border bg-background dark:bg-gray-950">
          <Logo className="h-7 w-7 bg-transparent cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded-none" />
          <div className="flex space-x-1.5 items-center">
            <Floating.Button onClick={handleTogglePopup}>
              <Languages size={14} />
              Translate
            </Floating.Button>
            <Floating.Button>
              <Volume2 size={15} />
              Voice
            </Floating.Button>
            <Floating.Button>
              <BookMarked size={14} />
              Add
            </Floating.Button>
            <div className="h-7 w-1 border-r border-gray-200 dark:border-gray-500"></div>
          </div>
          <Button className="more-button" variant="ghost" size="sm">
            <MoreVertical size={14} />
          </Button>
        </div>
      </motion.div>
    </TooltipProvider>
  )
}

Floating.Button = ({ children, ...attr }: PropsWithChildren<ButtonProps>) => (
  <Button {...attr} className="floating-button" variant="ghost" size="sm">
    {children}
  </Button>
)

export default Floating
