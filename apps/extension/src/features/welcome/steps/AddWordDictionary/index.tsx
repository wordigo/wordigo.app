import extensionBanner from "data-base64:~assets/banners/extension.png"
import { motion } from "framer-motion"

import { framerStepAnimation } from "~utils/constants"
import { getLocalMessage } from "~utils/locale"

const AddWordDictionary = () => {
  return (
    <motion.div className="container" variants={framerStepAnimation} initial="hidden" animate="visible">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-3xl text-gray-900 font-medium dark:text-white">{getLocalMessage("add_word_dictionary")}</h3>
          <p className=" text-gray-600 text-base dark:text-gray-400 text-center">{getLocalMessage("add_word_dictionary_desc")}</p>
          <img src={extensionBanner} />
        </div>
      </div>
    </motion.div>
  )
}

export default AddWordDictionary
