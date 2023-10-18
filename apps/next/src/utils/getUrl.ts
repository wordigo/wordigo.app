export default function () {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/";
  url = url.includes("http") ? url : `https://${url}`;
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
}

export const buildDynamicUrl = (base: string, params: Record<string, any>) => {
  let url = base;
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url += `&${key}=${value}`;
    }
  }
  return url;
};
