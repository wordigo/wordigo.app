chrome.runtime.onInstalled.addListener(({ reason }) => {
  // openWelcomePage()
  if (reason !== chrome.runtime.OnInstalledReason.INSTALL) {
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

export {}
