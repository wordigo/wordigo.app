import trpc from "~libs/trpc"

export { }

chrome.runtime.onMessage.addListener(
  async (request, sender, sendResponse) => {

    if (request.action === "translate_popup") {

      const post = await trpc.translation.translate.mutate({
        query: request.text,
        sourceLanguage: "en",
        targetLanguage: "tr"
      })

      alert(post.translatedText)

      console.log(post)
    }
  }
)