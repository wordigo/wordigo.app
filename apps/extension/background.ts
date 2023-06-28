import { Storage } from "@plasmohq/storage"

const storage = new Storage({
  area: "local"
})

chrome.contextMenus.create({
  id: "translateMenuItem",
  title: "Test Translate",
  contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "translateMenuItem") {
    translateText(info.selectionText, tab)
  }
})

async function translateText(selectedText, tab) {
  await chrome.tabs.sendMessage(tab.id, { action: "translate_popup", text: selectedText })
}

chrome.cookies.get({ url: "http://localhost:3000", name: "supabase-auth-token" }, async (result) => {
  await storage.set("token", result?.value)
})

export { }
