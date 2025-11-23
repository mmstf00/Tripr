import { mobileAuthService } from "@/services/mobileAuth";
import { mobileAuthFlow } from "@/services/mobileAuthFlow";
import { User } from "@/types/auth";
import { useCallback, useEffect, useState } from "react";

interface UseMobileAuthResult {
  user: User | null;
  isLoading: boolean;
  isNativePlatform: boolean;
  error: string | null;
  authenticate: () => Promise<boolean>;
  logout: () => Promise<boolean>;
  refreshToken: () => Promise<string | null>;
}

export function useMobileAuth(): UseMobileAuthResult {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNativePlatform, setIsNativePlatform] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsNativePlatform(mobileAuthService.isNativePlatform());
  }, []);

  const silentSignIn = useCallback(async () => {
    if (!isNativePlatform) return;

    setIsLoading(true);
    const result = await mobileAuthFlow.silentSignIn();

    if (result.success && result.user) {
      setUser(result.user);
      setError(null);
    } else {
      setError(result.error || null);
    }

    setIsLoading(false);
  }, [isNativePlatform]);

  useEffect(() => {
    if (isNativePlatform) {
      silentSignIn();
    }
  }, [isNativePlatform, silentSignIn]);

  const authenticate = useCallback(async (): Promise<boolean> => {
    if (!isNativePlatform) {
      setError("Not running on native platform");
      return false;
    }

    setIsLoading(true);
    setError(null);

    const result = await mobileAuthFlow.authenticate();

    if (result.success && result.user) {
      setUser(result.user);
      setIsLoading(false);
      return true;
    }
    setError(result.error || "Authentication failed");
    setIsLoading(false);
    return false;
  }, [isNativePlatform]);

  const logout = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    const success = await mobileAuthFlow.logout();

    if (success) {
      setUser(null);
      setError(null);
    } else {
      setError("Logout failed");
    }

    setIsLoading(false);
    return success;
  }, []);

  const refreshToken = useCallback(async (): Promise<string | null> => {
    const token = await mobileAuthFlow.refreshToken();

    if (!token) {
      setError("Failed to refresh token");
      return null;
    }

    return token;
  }, []);

  return {
    user,
    isLoading,
    isNativePlatform,
    error,
    authenticate,
    logout,
    refreshToken,
  };
}
