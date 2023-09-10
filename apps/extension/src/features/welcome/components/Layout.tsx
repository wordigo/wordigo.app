import type { PropsWithChildren } from "react"

import Provider from "~providers"
import ThemeProvider from "~providers/theme"

import { StepsProvider } from "../context/Step"

const WelcomeProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider>
      <ThemeProvider>
        <StepsProvider>{children}</StepsProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default WelcomeProvider
