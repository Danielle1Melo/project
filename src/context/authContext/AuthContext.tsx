"use client";
import { setCookie, parseCookies } from "nookies";
import { recoverUserInformation, signInRequest } from "@/services/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@phosphor-icons/react";
import { api } from "@/services/api";

type User = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AutheContentextType = {
  isAuthenticated: boolean;
  user?: User;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AutheContentextType);

interface ContextProps {
  children: ReactNode;
}

export function AuthProvider({ children }: ContextProps) {
  const router = useRouter();
  const [user, setUser] = useState<User>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  //aqui faria o fetch
  async function signIn({ password, email }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "nextauth.token", token, {
      maxAge: 60 * 60 * 1, // 1 hora
    });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);
    router.push("/mainPage");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
