import FootersHeader from "./Footer";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="relative max-w-screen-8xl w-full m-auto" aria-labelledby="footer" id="footer">
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
      <FootersHeader />
      <Subscribe />
    </footer>
  );
}
