export default function FeatureBanner() {
  return (
    <section className="rounded-2xl flex items-center flex-col bg-gradient-to-t dark:from-transparent relative">
      <svg
        className="blur-3xl absolute rounded-full -z-50 w-[450px] h-[1500px] pb-[900px] opacity-40 dark:opacity-80"
        fill="none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="50%"
      >
        <g clipPath="url(#clip0_17_60)">
          <g filter="url(#filter0_f_17_60)">
            <path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#4D07E3"></path>
            <path d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z" fill="#4C00FF"></path>
            <path d="M320 400H400V78.75L332.5 211.5L320 400Z" fill="#7fcef3"></path>
            <path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#7fcef3"></path>
          </g>
        </g>
        <defs>
          <filter
            colorinterpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="719.867"
            id="filter0_f_17_60"
            width="719.867"
            x="-159.933"
            y="-159.933"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
            <feGaussianBlur result="effect1_foregroundBlur_17_60" stdDeviation="79.9667"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div className="mt-[50px] mb-[80px] w-full min-w-[400px]">
        {/* Extension File */}
        <div className="bg-gray-400 w-[80%] h-[500px] rounded-lg m-auto"></div>
      </div>
    </section>
  );
}
