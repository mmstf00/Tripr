import { authService } from "@/services/auth";
import { AuthState, User } from "@/types/auth";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./authContextValue";

export interface AuthContextType extends AuthState {
  login: (user: User, token: string, expiresIn?: number) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from storage on mount with token validation
  useEffect(() => {
    const loadUser = async () => {
      try {
        const savedUser = authService.getUser();
        const token = authService.getToken();

        if (!savedUser || !token) {
          setIsLoading(false);
          return;
        }

        // Check if token is expired
        if (authService.isTokenExpired()) {
          console.log("Token expired, clearing auth");
          authService.clearAuth();
          setIsLoading(false);
          return;
        }

        // Check if session is expired
        if (authService.isSessionExpired()) {
          console.log("Session expired, clearing auth");
          authService.clearAuth();
          setIsLoading(false);
          return;
        }

        // Update last activity on successful load
        authService.updateLastActivity();

        // Validate token with Google (optional but recommended)
        // This ensures the token is still valid on the server side
        const isValid = await authService.validateToken(token);

        if (isValid) {
          setUser(savedUser);
        } else {
          console.log("Token validation failed, clearing auth");
          authService.clearAuth();
        }
      } catch (error) {
        console.error("Failed to load user:", error);
        // On error, clear potentially corrupted auth data
        authService.clearAuth();
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // Track user activity to extend session
  useEffect(() => {
    const updateActivity = () => {
      if (user) {
        authService.updateLastActivity();
      }
    };

    // Update activity on user interactions
    const events = ["mousedown", "keydown", "scroll", "touchstart"];
    events.forEach((event) => {
      window.addEventListener(event, updateActivity, { passive: true });
    });

    // Also update periodically (every 5 minutes)
    const interval = setInterval(() => {
      if (user && !authService.isSessionExpired()) {
        authService.updateLastActivity();
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, updateActivity);
      });
      clearInterval(interval);
    };
  }, [user]);

  const login = (userData: User, token: string, expiresIn?: number) => {
    authService.saveUser(userData);
    authService.saveToken(token, expiresIn);
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
