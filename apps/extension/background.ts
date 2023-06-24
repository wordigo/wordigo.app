import { Storage } from "@plasmohq/storage"
import { trpc } from "~libs/trpc"

export { }

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
  console.log(selectedText)
  const test = await trpc.post.all.query()
  console.log(test)
  storage.set("lastText", selectedText)
  // Tercüme işlemleri burada gerçekleştirilir
  storage.getAll().then((res) => {
    console.log(res)
  })
}

const storage = new Storage({
  area: "local"
})

storage.getAll().then((res) => {
  console.log(res)
})

chrome.cookies.get({ url: "http://localhost:3000", name: "supabase-auth-token" }, async (result) => {
  await storage.set("token", result.value)
})