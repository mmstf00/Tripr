import { authService } from "@/services/auth";
import { AuthState, User } from "@/types/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./authContextValue";

export interface AuthContextType extends AuthState {
  login: (user: User, token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from storage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = authService.getUser();
        const token = authService.getToken();

        if (savedUser && token) {
          setUser(savedUser);
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = (userData: User, token: string) => {
    authService.saveUser(userData);
    authService.saveToken(token);
    setUser(userData);
  };

  const logout = () => {
    authService.clearAuth();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
