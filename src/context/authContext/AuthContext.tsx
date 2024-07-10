"use client";

import Cookie from "js-cookie";
import {
  createContext,
  useState,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

export interface UserSession {
  email: string;
  username: string;
}

interface AutheContentextType {
  user: UserSession | undefined;
  logout: () => void;
  onLoginOk: () => void;
}

const AuthContext = createContext<AutheContentextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<UserSession | undefined>({
    email: "",
    username: "",
  });

  useEffect(() => {
    fetchUserInformation();
  }, []);

  const fetchUserInformation = async () => {
    const token = Cookie.get("session");

    if (!token) {
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_AUTHENTICATED}/api/v1/users/me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const body = await response.json();
    setUser({ email: body.email, username: body.username });
  };

  const onLoginOk = () => {
    fetchUserInformation();
  };

  const logout = () => {
    Cookie.remove("session");
    setUser(undefined);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, logout, onLoginOk }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AutheContentextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
