export { }

document.addEventListener("click", () => {
  chrome.runtime.sendMessage({ open: true }, (response) => {
    console.log("açıldı")

  })
})