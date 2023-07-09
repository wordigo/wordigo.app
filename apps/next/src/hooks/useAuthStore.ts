import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { type AuthTokenResponse, type User } from "@supabase/supabase-js"

export const useAuthStore = () => {
  const supabase = useSupabaseClient()
  const user = useUser()

  const signIn = async (email: string, password: string): Promise<{
    user: User | null
    error: AuthTokenResponse['error']
  }> => {
    const { data: result, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return { user: result.user, error }
  }

  const signUp = async (email: string, password: string, data: object): Promise<{
    user: User | null
    error: AuthTokenResponse['error']
  }> => {
    const { data: result, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        ...data
      }
    })
    return { user: result.user, error }
  }

  const logout = async () => {
    const result = await supabase.auth.signOut()
    return result
  }

  const computedIsLoggedIn = !!user

  return {
    signUp,
    signIn,
    logout,
    isLoggedIn: computedIsLoggedIn,
    user
  }
}