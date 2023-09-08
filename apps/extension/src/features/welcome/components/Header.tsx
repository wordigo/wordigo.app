import Logo from "data-base64:~assets/logo.png"

import Progressbar from "./Progressbar"

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center z-50 w-full gap-y-4">
      <Progressbar />
      <a href="https://wordigo.app/" target="_blank" className="px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <img className="w-48" src={Logo} />
      </a>
    </header>
  )
}

export default Header
