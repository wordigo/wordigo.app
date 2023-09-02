import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { type NextRequestWithAuth, withAuth } from "next-auth/middleware";

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith("/auth/signin") || req.nextUrl.pathname.startsWith("/auth/signup") && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const authMiddleware = withAuth({
      pages: {
        signIn: "/auth/signin",
        signOut: "/",
      },
    });

    return authMiddleware(req as NextRequestWithAuth, event);
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/(dashboard|auth)"],
};
