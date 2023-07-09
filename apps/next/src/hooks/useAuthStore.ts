import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { type AuthTokenResponse, type User } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { createContext, useContext, useState } from "react"

export interface IAuthStore {
  user: User | null
  isLoading: boolean
  isLoggedIn: boolean
  getUserMe: () => Promise<void>
  signIn: (email: string, password: string) => Promise<{
    user: User | null
    error: AuthTokenResponse['error']
  }>
  signUp: (email: string, password: string, data: object) => Promise<{
    user: User | null
    error: AuthTokenResponse['error']
  }>
  logout: () => Promise<void>
};

export const useAuth = () => {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const getUserMe = async () => {
    const { data } = await supabase.auth.getSession()

    if (data.session) {
      const {
        data: { user },
      } = await supabase.auth.getUser(data.session?.access_token)

      if (user) {
        setUser(user)
        setIsLoggedIn(true)
      }
    }
  }

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    const { data: result, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setIsLoggedIn(true)
    setIsLoading(false)
    return { user: result.user, error }
  }

  const signUp = async (email: string, password: string, data: object): Promise<{
    user: User | null
    error: AuthTokenResponse['error']
  }> => {
    setIsLoading(true)
    const { data: result, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data
      }
    })
    setUser(result.user)
    setIsLoading(false)
    return { user: result.user, error }
  }

  const logout = async () => {
    const result = await supabase.auth.signOut()
    setUser(null)
    await router.replace("/")
    return result
  }

  return {
    getUserMe,
    signUp,
    signIn,
    logout,
    isLoading,
    isLoggedIn,
    user
  }
}

export const AuthContext = createContext({} as IAuthStore)

export const useAuthStore = () => {
  return useContext(AuthContext)
}
