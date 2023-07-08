import { type AuthError, type Session, type User } from "@supabase/supabase-js"

export interface AuthState {
  session: Session | null
  setSession: (session: Session | null) => void
  login: (email: string, password: string) => Promise<User | AuthError | null>
  register: (
    email: string,
    password: string
  ) => Promise<User | AuthError | null>
  logout: () => Promise<void>
}