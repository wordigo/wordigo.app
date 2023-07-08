import { type AuthError, type Session, type User } from "@supabase/supabase-js"

export interface IProfile {
  username: string
}

export interface AuthState {
  session: Session | null
  user: User | null
  setSession: (session: Session | null) => void
  login: (email: string, password: string) => Promise<User | AuthError | null>
  getUserMe: () => void
  register: (
    email: string,
    password: string
  ) => Promise<User | AuthError | null>
  logout: () => Promise<void>
}