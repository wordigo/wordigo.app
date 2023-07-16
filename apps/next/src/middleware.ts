import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

import { decodeToken } from "./utils/decodeToken";

export async function middleware(request: NextRequest, response: NextResponse) {
  try {
    const supabase = createServerSupabaseClient({ req: request as any, res: response as any });
    const token = request.cookies.get("supabase-auth-token");

    const decodedToken = await decodeToken(token?.value as string);

    const user = await supabase.auth.getUser(decodedToken as string);

    console.log(user);

    if (!user.error) {
      const response = NextResponse.next();
      return response;
    } else throw Error;
  } catch (err) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/:lang/dashboard"],
};
