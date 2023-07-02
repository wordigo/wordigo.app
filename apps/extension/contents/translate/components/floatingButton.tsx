import { Button } from "@acme/ui"
import { Languages } from "lucide-react"

import { usePopover } from "~contents/translate/context/popover"

const FloatingButton = () => {
  const { cordinate, isFloating, setFloating, setPopup } = usePopover({})

  const handleTogglePopup = () => {
    console.log("test")

    setFloating(false)
    setPopup(true)
  }

  console.log("isFloating", isFloating)

  return (
    <div onClick={handleTogglePopup} className="absolute" style={{ top: cordinate.y + 14, left: cordinate.x }}>
      <Button className="!h-8 !w-8" size="icon">
        <Languages size={18} />
      </Button>
    </div>
  )
}

export default FloatingButton
