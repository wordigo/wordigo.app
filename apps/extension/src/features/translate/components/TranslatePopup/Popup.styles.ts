import { styled } from "baseui"
import { Button, type ButtonProps } from "baseui/button"
import { colors } from "baseui/tokens"
import { motion } from "framer-motion"
import type { ComponentType } from "react"
import Logo from "../Logo"

export const StyledContainer = styled(motion.div, ({ $theme }) => ({
  border: `1px solid ${colors.gray200}`,
  boxShadow: $theme.lighting.shadow600,
  borderRadius: $theme.sizing.scale100,
  backgroundColor: colors.white,
  color: $theme.colors.contentPrimary,
  position:"absolute",
  zIndex: -500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",
  flexDirection: "column",
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale100,
  paddingLeft: $theme.sizing.scale400,
  paddingRight: $theme.sizing.scale400,
}))

export const StyledContainerHeader = styled("div", ({ $theme }) => ({
  display:"flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: $theme.sizing.scale800,
  width: "100%",
}))

export const StyledHeader = styled("div", ({ $theme }) => ({
  display:"flex",
  alignItems: "center",
  gap: $theme.sizing.scale100,
}))

export const StyledLogo = styled(Logo, ({ $theme }) => ({
  height: $theme.sizing.scale850,
  width: $theme.sizing.scale850,
  borderRadius: $theme.sizing.scale100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}))

export const StyledHeaderTitle = styled("div", ({ $theme }) => ({
  fontWeight: "bold",
  fontSize: $theme.sizing.scale550,
  color: $theme.colors.contentPrimary,
}))


// w-full gap-y-2 flex flex-col
export const StyledContainerBody = styled("div", ({ $theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: $theme.sizing.scale300,
  padding: $theme.sizing.scale300,
}))

// absolute bottom-2 right-3 flex items-center justify-between gap-x-2
export const StyledContentActions = styled("div", ({ $theme }) => ({
  position: "absolute",
  bottom: $theme.sizing.scale300,
  right: $theme.sizing.scale300,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: $theme.sizing.scale100,
}))

export const StyledLanguageButton = styled(Button<ComponentType<ButtonProps>>, ({ $theme }) => ({
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
  gap: $theme.sizing.scale200,
  padding: $theme.sizing.scale300,
}))

export const StyledPopupLoader = styled("div", ({ $theme }) => ({
  display:"flex",
  gap: $theme.sizing.scale200,
  padding: $theme.sizing.scale300,
  flexDirection:"column",
  height: "92px",
}))

// w-full flex items-center justify-between

export const StyledPopupFooter = styled("div", ({ $theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: $theme.sizing.scale200,
}))