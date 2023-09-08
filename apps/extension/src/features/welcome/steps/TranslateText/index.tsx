import ExdtensionBanner from "data-base64:~assets/banners/extension.png"
import { motion } from "framer-motion"

import { framerStepAnimation } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"

const TranslateText = () => {
  return (
    <motion.div className="container" variants={framerStepAnimation} initial="hidden" animate="visible">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-3xl text-gray-900 font-medium dark:text-white">{getLocalMessage("translate_text")}</h3>
          <p className="text-gray-600 text-base dark:text-gray-400 text-center">{getLocalMessage("translate_text_desc")}</p>
          <img src={ExdtensionBanner} />
        </div>
      </div>
    </motion.div>
  )
}

export default TranslateText
