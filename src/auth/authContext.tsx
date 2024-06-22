import { InternalUser, useInternalAuth } from '@/data/auth';
import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

interface AuthContextProps {
  user: InternalUser | null;
  isLoading: boolean;
  login?: (initData: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({ user: null, isLoading: true });

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [ user, setUser ] = useState<InternalUser | null>(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const login = (initData: string) => {
    setIsLoading(true);
    return useInternalAuth(initData)
      .then(user => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    const initData = typeof window !== 'undefined' ? window.Telegram.WebApp.initData : '';

    if (initData) {
      void login(initData);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
