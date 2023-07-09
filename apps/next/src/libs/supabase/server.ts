import { createServerSupabaseClient } from "@supabase/auth-helpers-shared"
import { cookies, headers } from "next/headers"

export const createSupabaseServer = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_URL`)
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(`Must define process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`)
  }

  return createServerSupabaseClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    getCookie: () => cookies().get("supabase-auth-token")?.value,
    setCookie: () => null /* we cannot set the cookies yet */,
    getRequestHeader: (name: string) => headers().get(name) || undefined,
  })
}