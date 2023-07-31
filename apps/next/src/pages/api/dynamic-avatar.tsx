import { type NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import ColorHash from "color-hash";

export const config = {
  runtime: "edge",
};

const colorHash = new ColorHash({ saturation: 1.0 });

export const stringToColour = (s: string): string => colorHash.hex(s);

export const generateColours = (s: string): [string, string] => {
  const s1 = s.substring(0, s.length / 2);
  const s2 = s.substring(s.length / 2);
  const c1 = stringToColour(s1);
  const c2 = stringToColour(s2);

  return [c1, c2];
};

export default function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const username = searchParams.get("username");
  const size = Number(searchParams.get("size")) | 256;
  if (!username) {
    return new ImageResponse(<>{'Visit with "?username=vercel"'}</>, {
      width: 1200,
      height: 630,
    });
  }

  const [c1, c2] = generateColours(username);

  return new ImageResponse(
    (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
            <stop stop-color={c1} />
            <stop offset="1" stop-color={c2} />
          </linearGradient>
        </defs>
      </svg>
    ),
    {
      width: size,
      height: size,
    },
  );
}
