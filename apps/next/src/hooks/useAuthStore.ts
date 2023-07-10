import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { type AuthError, type AuthTokenResponse, type User } from "@supabase/supabase-js";

export interface IAuthStore {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  userLoading: boolean;
  getUserMe: () => Promise<void>;
  signIn: (
    email: string,
    password: string,
  ) => Promise<{
    user: User | null;
    error: AuthTokenResponse["error"];
  }>;
  signUp: (
    email: string,
    password: string,
    data: object,
  ) => Promise<{
    user: User | null;
    error: AuthTokenResponse["error"];
  }>;
  logout: () => Promise<{ error: AuthError | null }>;
}

export const useAuth = (): IAuthStore => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getUserMe = async () => {
    const { data } = await supabase.auth.getSession();

    if (data.session) {
      setUserLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser(data.session?.access_token);

      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      }
    }
    setUserLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    const { data: result, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsLoggedIn(true);
    setIsLoading(false);
    return { user: result.user, error };
  };

  const signUp = async (
    email: string,
    password: string,
    data: object,
  ): Promise<{
    user: User | null;
    error: AuthTokenResponse["error"];
  }> => {
    setIsLoading(true);
    const { data: result, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data,
      },
    });
    setUser(result.user);
    setIsLoading(false);
    return { user: result.user, error };
  };

  const logout = async () => {
    const result = await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUser(null);
    await router.replace("/");
    return result;
  };

  return {
    getUserMe,
    signUp,
    signIn,
    logout,
    userLoading,
    isLoading,
    isLoggedIn,
    user,
  };
};

export const AuthContext = createContext({} as IAuthStore);

export const useAuthStore = () => {
  return useContext(AuthContext);
};
