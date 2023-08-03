import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common"

import { Storage } from "@plasmohq/storage"

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

chrome.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cookie.name === WORDIGO_JWT_TOKEN_COOKIE) {
    if (changeInfo.removed || changeInfo.cookie.value.trim() === "") {
      void storage.remove(WORDIGO_JWT_TOKEN_COOKIE)
    } else {
      void storage.set(WORDIGO_JWT_TOKEN_COOKIE, changeInfo.cookie.value)
    }
  }
})

// const getCookie = async () => {
//   const cookie = await chrome.cookies.get({ url: process.env.PLASMO_PUBLIC_SITE_URL, name: WORDIGO_AUTH_SESSION_COOKIE })

//   if (cookie.value.trim() === "") {
//     void storage.remove(JWT_TOKEN_COOKIE)
//   } else {
//     const response = await getSession(cookie.value)
//     console.log(response)

//     void storage.set(JWT_TOKEN_COOKIE, response.user.accessToken)
//   }
// }

// getCookie()

export {}
