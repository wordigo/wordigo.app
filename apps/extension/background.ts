import { Storage } from "@plasmohq/storage"
import trpc from "~libs/trpc"

const storage = new Storage({
  area: "local"
})

chrome.contextMenus.create({
  id: "translateMenuItem",
  title: "Test Translate",
  contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info)

  if (info.menuItemId === "translateMenuItem") {
    translateText(info.selectionText)
  }
})

async function translateText(selectedText) {
  const post = await trpc.translation.translate.mutate({
    query: selectedText,
    sourceLanguage: "en",
    targetLanguage: "tr"
  })
  console.log(post)
}

storage.getAll().then((res) => {
  console.log(res)
}).catch(() => { })

chrome.cookies.get({ url: "http://localhost:3000", name: "supabase-auth-token" }, async (result) => {
  await storage.set("token", result?.value)
})

chrome.runtime.onMessage.addListener((request) => {
  if (request.open) {
    return new Promise(resolve => {
      console.log(chrome.action)


      chrome.action.getPopup({}, (popup) => {
        return resolve(popup)
      })
    })
  }
})

export { }
