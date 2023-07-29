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

export {}
