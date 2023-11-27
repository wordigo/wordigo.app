export default function Save({ color, className, isFilled = true }) {
  const isSvgFilled = {
    true: (
      <svg
        className={className}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <title>bookmark-solid</title>{" "}
          <g id="Layer_2" data-name="Layer 2">
            {" "}
            <g id="invisible_box" data-name="invisible box">
              {" "}
              <rect width="48" height="48" fill="none"></rect>{" "}
            </g>{" "}
            <g id="icons_Q2" data-name="icons Q2">
              {" "}
              <path d="M12,5a2,2,0,0,0-2,2V41a2,2,0,0,0,2,2,2.4,2.4,0,0,0,1.4-.5L24,34.4l10.6,8.1A2.4,2.4,0,0,0,36,43a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2Z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    false: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"
            fill={color}
          ></path>{" "}
        </g>
      </svg>
    ),
  };

  return isSvgFilled[isFilled];
}
