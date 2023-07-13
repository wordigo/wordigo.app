export default function Footer() {
  return (
    <footer className="relative border-white/5 border-t bg-vulcan-900" aria-labelledby="footer" id="footer ">
      <svg
        className="blur-3xl absolute opacity-80 right-0"
        fill="none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="50%"
      >
        <g clip-path="url(#clip0_17_60)">
          <g filter="url(#filter0_f_17_60)">
            <path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#4D07E3"></path>
            <path d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z" fill="#4C00FF"></path>
            <path d="M320 400H400V78.75L332.5 211.5L320 400Z" fill="#7fcef3"></path>
            <path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#7fcef3"></path>
          </g>
        </g>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="719.867"
            id="filter0_f_17_60"
            width="719.867"
            x="-159.933"
            y="-159.933"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
            <feGaussianBlur result="effect1_foregroundBlur_17_60" stdDeviation="79.9667"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div className="relative mx-auto max-w-7xl md:px-12 lg:px-32 px-8 py-12 lg:py-24">
        <div className="xl:gap-8 xl:grid xl:grid-cols-4">
          <div className="text-white">
            <div className="gap-3 items-center inline-flex">
              <svg className="h-5" fill="none" viewBox="0 0 78 30" xmlns="http://www.w3.org/2000/svg" id="logo-70">
                <path
                  d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                  fill="#ffffff"
                  className="ccustom"
                ></path>
                <path
                  d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                  fill="#ffffff"
                  className="ccustom"
                ></path>
              </svg>
              <p className="font-bold text-2xl uppercase">Navy</p>
            </div>
            <p className="text-sm text-slate-400 mt-2">
              <span className="text-sm text-slate-400 font-normal mt-6">
                © 2023 Lexington Themes.
                <br />
                All rights reserved
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-3">
            <div className="md:grid md:gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-white">Navigation</h3>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <a href="/overview" className="text-sm text-slate-400 hover:text-white inline-flex items-center">
                      Overview{" "}
                      <span className="text-xs font-medium bg-vulcan-800 inline-flex items-center ml-4 px-3 py-0.5 rounded-full text-sky-400">
                        40+ Pages
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/styleguide" className="text-sm text-slate-400 hover:text-white">
                      Style Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-white">Other projects</h3>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <a href="https://www.unwrapped.design" className="text-sm text-slate-400 hover:text-white">
                      Unwrapped
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-white">Stay updated</h3>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <a href="https://www.lexingtonthemes.com/license" className="text-sm text-slate-400 hover:text-white">
                      License
                    </a>
                  </li>
                  <li>
                    <a href="https://www.lexingtonthemes.com/documentation" className="text-sm text-slate-400 hover:text-white">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-white">Socials</h3>
                <ul className="mt-4 space-y-2" role="list">
                  <li>
                    <a href="https://twitter.com/unwrappedHQ" className="text-sm text-slate-400 hover:text-white">
                      @unwrappedHQ
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Mike_Andreuzza" className="text-sm text-slate-400 hover:text-white">
                      @Mike_Andreuzza
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/MichaelAndreuzza.html" className="text-sm text-slate-400 hover:text-white">
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
