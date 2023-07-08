import { create } from "zustand"
import { type AuthState } from "./interfaces"

const useAuthStore = create<AuthState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  login: async (email, password) => {
    if (!email) return Promise.reject("Email is required")
    if (!password) return Promise.reject("Password is required")

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) return Promise.reject(error)

    set({ session: data.session })
    return Promise.resolve(data.user)
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