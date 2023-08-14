const Logo = ({ className }: { className: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="none" viewBox="0 0 96 96">
      <path
        fill="url(#paint0_linear_1_77)"
        fillRule="evenodd"
        d="M45.043 75.555c-8.267.205-16.6-2.848-22.91-9.158-12.224-12.223-12.224-32.041 0-44.265 12.223-12.223 32.04-12.223 44.264 0 12.224 12.224 12.224 32.042 0 44.265l5.432 5.432c1.252 1.252.38 3.393-1.39 3.414l-25.396.312zm17.05-13.461c-9.846 9.846-25.81 9.846-35.657 0-9.847-9.847-9.847-25.811 0-35.658 9.847-9.847 25.811-9.847 35.658 0 9.846 9.847 9.846 25.811 0 35.658z"
        clipRule="evenodd"></path>
      <path
        fill="url(#paint1_linear_1_77)"
        d="M65.205 47.692c0 9.78-9.148 17.708-20.432 17.708-11.284 0-20.432-7.928-20.432-17.708 0-3.39 9.148-4.898 20.432-4.898 11.284 0 20.432 1.507 20.432 4.898z"></path>
      <path
        fill="#fff"
        d="M59.983 46.607c-.208 8.14-6.698 14.667-14.776 15.152 8.229.26 15.19-5.613 15.703-13.4.042-.639-.289-1.224-.926-1.752z"></path>
      <g filter="url(#filter0_d_1_77)">
        <path
          fill="url(#paint2_linear_1_77)"
          fillRule="evenodd"
          d="M45.043 75.555c-8.267.205-16.6-2.848-22.91-9.158-12.224-12.223-12.224-32.041 0-44.265 12.223-12.223 32.04-12.223 44.264 0 12.224 12.224 12.224 32.042 0 44.265a31.193 31.193 0 01-21.354 9.158zm17.05-13.461c-9.846 9.846-25.81 9.846-35.657 0-9.847-9.847-9.847-25.811 0-35.658 9.847-9.847 25.811-9.847 35.658 0 9.846 9.847 9.846 25.811 0 35.658z"
          clipRule="evenodd"
          shapeRendering="crispEdges"></path>
      </g>
      <g clipPath="url(#clip0_1_77)">
        <path
          fill="#5282FF"
          d="M78.247 14.537l-1.305 3.478-3.477 1.304 3.477 1.304 1.305 3.478 1.304-3.478 3.477-1.304-3.477-1.304-1.304-3.478z"></path>
      </g>
      <g clipPath="url(#clip1_1_77)">
        <path
          fill="#5282FF"
          d="M14.777 65.834l-1.304 3.478-3.478 1.304 3.478 1.305 1.304 3.477 1.304-3.477 3.478-1.305-3.478-1.304-1.304-3.478z"></path>
      </g>
      <defs>
        <filter
          id="filter0_d_1_77"
          width="82.6"
          height="82.6"
          x="4.965"
          y="6.965"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
          <feOffset dx="2" dy="4"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_77"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_77" result="shape"></feBlend>
        </filter>
        <linearGradient id="paint0_linear_1_77" x1="54.094" x2="-30.347" y1="9.83" y2="115.913" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5282FF"></stop>
          <stop offset="1" stopColor="#5282FF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear_1_77" x1="24.341" x2="108.677" y1="47.141" y2="67.138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5282FF"></stop>
          <stop offset="1" stopColor="#5282FF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint2_linear_1_77" x1="52.777" x2="-29.639" y1="8.512" y2="115.815" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5282FF"></stop>
          <stop offset="1" stopColor="#5282FF" stopOpacity="0"></stop>
        </linearGradient>
        <clipPath id="clip0_1_77">
          <path fill="#fff" d="M0 0H10.433V10.433H0z" transform="translate(73.03 14.102)"></path>
        </clipPath>
        <clipPath id="clip1_1_77">
          <path fill="#fff" d="M0 0H10.433V10.433H0z" transform="translate(9.56 65.4)"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Logo
