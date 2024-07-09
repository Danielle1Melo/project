"use client"
import Cookies from "js-cookie";
import { createContext, useState, PropsWithChildren, useContext } from "react";
import { useRouter } from "next/navigation";


export interface UserSession{
  email: string;
  username: string;
}

// type User = {
//   name: string;
//   email: string;
// };

// type SignInData = {
//   email: string;
//   password: string;
// };

interface AutheContentextType {
  user: UserSession | undefined,
  logout: () => void,
  onLoginOk: () => void,
};

const AuthContext = createContext<AutheContentextType | undefined >(undefined);

export const AuthProvider = ({children} : PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<UserSession | undefined>({email: '', username: ''});

  const fetchUserInformation = async () => {
    const token = Cookies.get('session');

    if(!token){
      return
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_AUTHENTICATED}/api/v1/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const body = await response.json();
    setUser({email: body.email, username: body.username});
    
  }

  const onLoginOk = () => {
    fetchUserInformation();
  }

  const logout = () => {
    Cookies.remove('session');
    setUser(undefined);
    router.push('/');
  }

  return (
    <AuthContext.Provider value={{user, logout, onLoginOk}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AutheContentextType => {
  const context = useContext(AuthContext);
  if(context === undefined){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

