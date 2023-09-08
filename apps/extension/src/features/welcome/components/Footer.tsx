import { getLocalMessage } from "~utils/locale"

const Footer = () => {
  return (
    <footer className="mt-auto text-center py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">{getLocalMessage("footer")}</p>
      </div>
    </footer>
  )
}

export default Footer
