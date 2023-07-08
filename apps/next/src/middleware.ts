import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import supabase from './libs/supabase'
import { decodeToken } from './utils/decodeToken'

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("supabase-auth-token")
    const decodedToken = await decodeToken(token?.value as string)

    const user = await supabase.auth.getUser(decodedToken as string)

    if (!user.error) {
      const response = NextResponse.next()
      return response
    } else throw Error
  } catch {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: '/dashboard',
}