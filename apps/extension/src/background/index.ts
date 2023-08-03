import { Storage } from "@plasmohq/storage"

import { getSession } from "~api/auth"
import { JWT_TOKEN_COOKIE, WORDIGO_AUTH_SESSION_COOKIE } from "~utils/constants"

const storage = new Storage({
  area: "local"
})

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason !== chrome.runtime.OnInstalledReason.INSTALL) {
    // openWelcomePage()
    return
  }
})

const openWelcomePage = () => {
  chrome.tabs.create(
    {
      active: true,
      url: "tabs/welcome.html"
    },
    null
  )
}

chrome.cookies.onChanged.addListener(async (changeInfo) => {
  if (changeInfo.cookie.name === WORDIGO_AUTH_SESSION_COOKIE) {
    if (changeInfo.removed || changeInfo.cookie.value.trim() === "") {
      void storage.remove(JWT_TOKEN_COOKIE)
    } else {
      const response = await getSession(changeInfo.cookie.value)

      void storage.set(JWT_TOKEN_COOKIE, response.user.accessToken)
    }
  }
})

export {}
