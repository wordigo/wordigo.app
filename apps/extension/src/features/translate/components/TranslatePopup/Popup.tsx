import { AllCountryLanguages } from "@wordigo/common"
import { Button } from "baseui/button"
import { Skeleton } from "baseui/skeleton"
import { Textarea } from "baseui/textarea"
import { colors } from "baseui/tokens"
import { ArrowRightLeft, Settings, X } from "lucide-react"
import { useEffect, useMemo } from "react"
import { Fragment } from "react"
import ReactCountryFlag from "react-country-flag"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"

import TextCopy from "~/components/CopyText"
import { TranslateApi } from "~api/translate"
import CTooltip from "~components/CTooltip"
import { usePopoverStore } from "~stores/popover"
import { getPopupCordinate } from "~utils"
import { TRANSLATE_CARD_WIDTH } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"

import AuidoPlayer from "../AudioPlayer"
import SaveDictionaryWord from "../SaveDictionary"
import {
  StyledContainer,
  StyledContainerBody,
  StyledContainerHeader,
  StyledContentActions,
  StyledHeader,
  StyledHeaderTitle,
  StyledLanguageButton,
  StyledLogo,
  StyledPopupFooter,
  StyledPopupLoader
} from "./Popup.styles"

const TranslatePopup = () => {
  const { cordinate, selectedText, targetLanguage, setPopup } = usePopoverStore()
  const { mutate: handleTranslate, isLoading, data: result } = useMutation(TranslateApi)
  const { top, left } = getPopupCordinate(cordinate)

  const getSourceLanguageFlag = useMemo(() => AllCountryLanguages.find((lang) => lang.code === (result?.data?.sourceLanguage || "").toUpperCase()), [result?.data?.sourceLanguage])

  const getTargetLanguageFlag = useMemo(() => AllCountryLanguages.find((lang) => lang.code === targetLanguage.toUpperCase()), [result?.data?.targetLanguage])

  useEffect(() => {
    handleTranslate({
      query: selectedText,
      sourceLanguage: "auto",
      targetLanguage: targetLanguage.toLowerCase()
    })
  }, [selectedText])

  const handleClose = () => {
    setPopup(false)
  }

  return (
    <StyledContainer
      tabIndex={50}
      id="el-translate-container"
      initial={{
        top: top - 20,
        left: left - 200,
        width: TRANSLATE_CARD_WIDTH
      }}
      animate={{
        top: top + 20,
        left: left - 200
      }}>
      <StyledContainerHeader>
        <StyledHeader>
          <StyledLogo />
          <StyledHeaderTitle>{getLocalMessage("translate")}</StyledHeaderTitle>
        </StyledHeader>
        <StyledHeader>
          <StyledLanguageButton size="mini" kind="secondary">
            {isLoading || !getSourceLanguageFlag ? <Skeleton width="16px" height="16px" /> : <TranslatePopup.CountryFlag countryCode={getSourceLanguageFlag?.icon} />}
            <ArrowRightLeft color={colors.gray400} size={10} />
            <TranslatePopup.CountryFlag countryCode={getTargetLanguageFlag?.icon} />
          </StyledLanguageButton>
          <Button onClick={handleClose} kind="tertiary" size="mini">
            <X size={16} />
          </Button>
        </StyledHeader>
      </StyledContainerHeader>
      <StyledContainerBody>
        <div style={{ position: "relative", width: "100%" }}>
          {isLoading ? (
            <TranslatePopup.Loader />
          ) : (
            <Fragment>
              <Textarea rows={4} overrides={{ Root: { style: { borderRadius: "2px" } } }} value={result?.data?.translatedText} readOnly size="compact" clearable clearOnEscape />
              <StyledContentActions>
                <TranslatePopup.AudioPlayer message={selectedText} targetLanguage={targetLanguage} />
                <TextCopy text={result?.data?.translatedText} />
              </StyledContentActions>
            </Fragment>
          )}
        </div>
      </StyledContainerBody>
      <StyledPopupFooter>
        <TranslatePopup.SettingsAction />
        <SaveDictionaryWord translatedText={result?.data?.translatedText} sourceLangauge={result?.data?.sourceLanguage} />
      </StyledPopupFooter>
    </StyledContainer>
  )
}

TranslatePopup.AudioPlayer = AuidoPlayer

TranslatePopup.SettingsAction = () => {
  const { setPopup } = usePopoverStore()

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings"
    })
    opeendSettings && setPopup(false)
  }

  return (
    <CTooltip content={getLocalMessage("open_settings")}>
      <Button onClick={openSettingsPage} size="mini" kind="secondary">
        <Settings size={17} />
      </Button>
    </CTooltip>
  )
}

TranslatePopup.Loader = () => {
  return (
    <StyledPopupLoader>
      <Skeleton width="100%" height="18px" />
      <Skeleton width="100%" height="18px" />
    </StyledPopupLoader>
  )
}

TranslatePopup.CountryFlag = ({ countryCode }: { countryCode: string }) => {
  return (
    <ReactCountryFlag
      style={{
        fontSize: "1em",
        lineHeight: "1em"
      }}
      svg
      countryCode={countryCode || "DT"}
    />
  )
}

export default TranslatePopup
