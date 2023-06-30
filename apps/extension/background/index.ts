// chrome.contextMenus.create({
//   id: "translateMenuItem",
//   title: "Test Translate",
//   contexts: ["selection"]
// })

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//   if (info.menuItemId === "translateMenuItem") {
//     translateText(info.selectionText, tab)
//   }
// })

// async function translateText(selectedText, tab) {
//   await chrome.tabs.sendMessage(tab.id, { action: "translate_popup", text: selectedText })
// }

export { }
