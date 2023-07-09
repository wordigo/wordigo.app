// import supabase from "@/libs/supabase/client"
// import { create } from "zustand"
// import { type IAuthState } from "./interfaces"

// const useAuthStore = create<IAuthState>((set) => ({
//   user: null,
//   session: null,
//   isLoggedIn: false,
//   setSession: (session) => set({ session }),
//   getUserMe: async () => {
    // const { data } = await supabase.auth.getSession()

    // if (data.session) {
    //   const {
    //     data: { user },
    //     error,
    //   } = await supabase.auth.getUser(data.session?.access_token)

//       if (error) {
//         return error
//       } else {
//         set({ user, isLoggedIn: true })
//       }
//     }

//   },
//   login: async (email, password) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })
//     if (error) return error

//     set({ session: data.session, user: data.user, isLoggedIn: true })
//     return data.user
//   },
//   register: async (email, password, profileData) => {
//     if (!email) return Promise.reject("Email is required")
//     if (!password) return Promise.reject("Password is required")

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         data: profileData
//       }
//     })
//     if (error) return Promise.reject(error)

//     set({ session: data.session, user: data.user, isLoggedIn: true })
//     return Promise.resolve(data.user)
//   },
//   logout: async () => {
//     const { error } = await supabase.auth.signOut()
//     if (error) return error
//     set({ session: null, user: null, isLoggedIn: false })
//     return true
//   },
// }))

// export default useAuthStore