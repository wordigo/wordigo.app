import { Button, Input } from "@wordigo/ui"
import React from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import WelcomeProvider from "./components/Layout"
import Progressbar from "./components/Progressbar"
import StepActions from "./components/StepActions"
import { Steps, StepsProvider, useSteps } from "./context/Step"
import AddWordDictionary from "./steps/AddWordDictionary"
import SetupPage from "./steps/Setup"
import TranslateText from "./steps/TranslateText"

const Welcome = () => {
  return (
    <WelcomeProvider>
      <div className="mx-auto w-full h-screen">
        <div className="mt-auto h-full justify-center items-center flex flex-col mx-auto text-center py-2">
          <Header />
          <div className="w-full max-w-2xl h-full mt-auto flex flex-col items-center justify-center py-6 px-2 sm:px-4 lg:px-4">
            <Steps startsFrom={1} onStepChange={() => {}}>
              <TranslateText />
              <AddWordDictionary />
              <SetupPage />
            </Steps>
            <StepActions />
          </div>
          <Footer />
        </div>
      </div>
    </WelcomeProvider>
  )
}

export default Welcome
