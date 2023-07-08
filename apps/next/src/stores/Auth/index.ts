import { create } from "zustand"
import { type AuthState } from "./interfaces"
import supabase from "@/libs/supabase"

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  setSession: (session) => set({ session }),
  getUserMe: async () => {
    const { data } = await supabase.auth.getSession()

    if (data.session) {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser(data.session?.access_token)

      if (error) {
        return error
      } else {
        set({ user })
      }
    }

  },
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) return error

    set({ session: data.session })
    return data.user
  },
  register: async (email, password) => {
    if (!email) return Promise.reject("Email is required")
    if (!password) return Promise.reject("Password is required")

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) return Promise.reject(error)

    set({ session: data.session })
    return Promise.resolve(data.user)
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut()
    if (error) return Promise.reject(error)
    set({ session: null })
    return Promise.resolve()
  },
}))

export default useAuthStore