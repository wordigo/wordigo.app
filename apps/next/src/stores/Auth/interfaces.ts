import { type AuthError, type Session, type User } from "@supabase/supabase-js"

export interface IProfile {
  username: string
}

export interface IAuthState {
  session: Session | null
  user: User | null
  isLoggedIn: boolean
  setSession: (session: Session | null) => void
  login: (email: string, password: string) => Promise<User | AuthError | null>
  getUserMe: () => void,
  register: (
    email: string,
    password: string,
    { }: {
      name: string
    }
  ) => Promise<User | AuthError | null>
  logout: () => Promise<AuthError | boolean>
}