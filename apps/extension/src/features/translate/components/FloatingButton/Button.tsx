import { type ButtonProps } from "baseui/button"
import { FloatingRouteMarker } from "baseui/map-marker"
import { BookMarked, Languages, MoreVertical, Volume2 } from "lucide-react"
import { useRef } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { usePopoverStore } from "~stores/popover"
import { getPopupCordinate } from "~utils"
import { getLocalMessage } from "~utils/locale"

import Logo from "../Logo"
import { MotionCard, StyledButtonGroup, StyledContainer, StyledFloatingButton, StyledLogoContainer } from "./Button.styles"

const Floating = () => {
  const playerRef = useRef<HTMLAudioElement>()
  const { cordinate, setFloating, setPopup, selectedText, targetLanguage } = usePopoverStore()
  const { top, left } = getPopupCordinate(cordinate)

  const handleTogglePopup = () => {
    setFloating(false)
    setPopup(true)
  }

  const textToSpeech = () => {
    void playerRef?.current?.play()
  }

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    opeendSettings && setPopup(false)
  }

  const computedUrl = `https://translate.googleapis.com/translate_tts?client=gtx&tl=${targetLanguage}&q=${encodeURIComponent(selectedText)}`

  return (
    <div>
      <audio src={computedUrl} ref={playerRef} />
      <MotionCard
        tabIndex={500}
        id="el-popup-container"
        initial={{
          top: top - 20,
          left: left - 135
        }}
        animate={{
          top: top + 10,
          left: left - 135
        }}>
        <FloatingRouteMarker
          anchorPosition="top-center"
          overrides={{ Root: { style: { background: "transparent", padding: "0px" } } }}
          label={
            <StyledContainer>
              <StyledLogoContainer>
                <Logo />
              </StyledLogoContainer>
              <StyledButtonGroup>
                <Floating.Button onClick={handleTogglePopup}>
                  <Languages size={14} />
                  {getLocalMessage("translate")}
                </Floating.Button>
                <Floating.Button onClick={textToSpeech}>
                  <Volume2 size={15} />
                  {getLocalMessage("voice")}
                </Floating.Button>
                <Floating.Button>
                  <BookMarked size={14} />
                  {getLocalMessage("add")}
                </Floating.Button>
                <div className="h-7 w-1 border-r border-gray-200 dark:border-gray-500"></div>
              </StyledButtonGroup>
              <Floating.Button onClick={openSettingsPage}>
                <MoreVertical size={16} />
              </Floating.Button>
            </StyledContainer>
          }></FloatingRouteMarker>
      </MotionCard>
    </div>
  )
}

Floating.Button = ({ children, ...attr }: ButtonProps) => {
  return (
    <StyledFloatingButton kind="tertiary" size="compact" {...attr}>
      {children}
    </StyledFloatingButton>
  )
}

export default Floating
