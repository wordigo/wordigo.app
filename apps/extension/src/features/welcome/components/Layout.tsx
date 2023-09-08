import Logo from "data-base64:~assets/logo.png"
import type { PropsWithChildren } from "react"

import Provider from "~providers"
import ThemeProvider from "~providers/theme"

import { StepsProvider } from "../context/Step"

const WelcomeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider>
      <ThemeProvider>
        <StepsProvider>{children}</StepsProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default WelcomeProvider
