import { User } from "@/types/auth";

const USER_STORAGE_KEY = "tripr_user";
const TOKEN_STORAGE_KEY = "tripr_token";
const TOKEN_EXPIRY_KEY = "tripr_token_expiry";
const SESSION_PREFERENCES_KEY = "tripr_session_preferences";
const SESSION_LAST_ACTIVITY_KEY = "tripr_session_last_activity";

// Backend API URL
// In Docker, use relative path (nginx proxies /api to backend)
// In development, use full URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || "";

// Google OAuth tokens typically expire after 1 hour (3600 seconds)
const DEFAULT_TOKEN_EXPIRY = 3600;

// Session timeout: 30 minutes of inactivity (1800 seconds)
export const DEFAULT_SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds

// "Remember Me" extends session forever (using a very large number)
export const REMEMBER_ME_SESSION_TIMEOUT = Number.MAX_SAFE_INTEGER; // Effectively forever

export interface SessionPreferences {
  sessionTimeout: number; // in milliseconds
}

export const authService = {
  // Save user to localStorage
  saveUser: (user: User) => {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  },

  // Get user from localStorage
  getUser: (): User | null => {
    try {
      const userStr = localStorage.getItem(USER_STORAGE_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error("Failed to get user:", error);
      return null;
    }
  },

  // Save token to localStorage with expiration tracking
  saveToken: (token: string, expiresIn?: number) => {
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      // Store expiration time (default to 1 hour if not provided)
      const expiryTime = Date.now() + ((expiresIn || DEFAULT_TOKEN_EXPIRY) * 1000);
      localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
    } catch (error) {
      console.error("Failed to save token:", error);
    }
  },

  // Get token from localStorage
  getToken: (): string | null => {
    try {
      return localStorage.getItem(TOKEN_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to get token:", error);
      return null;
    }
  },

  // Get token expiration timestamp
  getTokenExpiry: (): number | null => {
    try {
      const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
      return expiry ? parseInt(expiry, 10) : null;
    } catch (error) {
      console.error("Failed to get token expiry:", error);
      return null;
    }
  },

  // Check if token is expired
  isTokenExpired: (): boolean => {
    const expiry = authService.getTokenExpiry();
    if (!expiry) {
      // No expiry info stored, check if we have a token
      // If token exists but no expiry, assume it might be expired for safety
      const token = authService.getToken();
      return token === null;
    }
    return Date.now() > expiry;
  },

  // Validate token with backend (which validates with Google)
  validateToken: async (token: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/api/auth/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ accessToken: token }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return data.valid === true;
    } catch (error) {
      console.error("Token validation error:", error);
      return false;
    }
  },

  // Login with backend (sends token to backend, gets session cookie)
  loginWithBackend: async (accessToken: string): Promise<User | null> => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ accessToken }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: "Login failed" }));
        throw new Error(error.error || "Login failed");
      }

      const data = await response.json();
      return data.user || null;
    } catch (error) {
      console.error("Backend login error:", error);
      throw error;
    }
  },

  // Register with backend (sends token to backend, creates user and gets session cookie)
  registerWithBackend: async (accessToken: string): Promise<User | null> => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ accessToken }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: "Registration failed" }));
        if (response.status === 409) {
          throw new Error(error.error || "User with this email already exists.");
        }
        throw new Error(error.error || "Registration failed");
      }

      const data = await response.json();
      return data.user || null;
    } catch (error) {
      console.error("Backend registration error:", error);
      throw error;
    }
  },

  // Get current user from backend session
  getCurrentUser: async (): Promise<User | null> => {
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return data.user || null;
    } catch (error) {
      console.error("Get current user error:", error);
      return null;
    }
  },

  // Logout from backend
  logoutFromBackend: async (): Promise<void> => {
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Backend logout error:", error);
      // Continue with local logout even if backend call fails
    }
  },

  // Clear authentication data
  clearAuth: async () => {
    try {
      // Logout from backend first
      await authService.logoutFromBackend();

      // Then clear local storage
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(TOKEN_EXPIRY_KEY);
      localStorage.removeItem(SESSION_PREFERENCES_KEY);
      localStorage.removeItem(SESSION_LAST_ACTIVITY_KEY);
    } catch (error) {
      console.error("Failed to clear auth:", error);
      // Still clear local storage even if backend call fails
      try {
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem(TOKEN_EXPIRY_KEY);
        localStorage.removeItem(SESSION_PREFERENCES_KEY);
        localStorage.removeItem(SESSION_LAST_ACTIVITY_KEY);
      } catch (e) {
        // Ignore
      }
    }
  },

  // Check if user is authenticated (with token expiration check)
  isAuthenticated: (): boolean => {
    const user = authService.getUser();
    const token = authService.getToken();

    if (!user || !token) {
      return false;
    }

    // Check if token is expired
    if (authService.isTokenExpired()) {
      return false;
    }

    // Check session timeout
    if (authService.isSessionExpired()) {
      return false;
    }

    return true;
  },

  // Session Management
  saveSessionPreferences: (preferences: Omit<SessionPreferences, 'rememberMe'>) => {
    try {
      localStorage.setItem(SESSION_PREFERENCES_KEY, JSON.stringify({
        sessionTimeout: REMEMBER_ME_SESSION_TIMEOUT, // Always unlimited
      }));
      // Update last activity timestamp
      authService.updateLastActivity();
    } catch (error) {
      console.error("Failed to save session preferences:", error);
    }
  },

  getSessionPreferences: (): SessionPreferences => {
    try {
      const prefsStr = localStorage.getItem(SESSION_PREFERENCES_KEY);
      if (prefsStr) {
        return JSON.parse(prefsStr);
      }
    } catch (error) {
      console.error("Failed to get session preferences:", error);
    }
    // Default preferences
    return {
      sessionTimeout: REMEMBER_ME_SESSION_TIMEOUT,
    };
  },

  updateLastActivity: () => {
    try {
      localStorage.setItem(SESSION_LAST_ACTIVITY_KEY, Date.now().toString());
    } catch (error) {
      console.error("Failed to update last activity:", error);
    }
  },

  getLastActivity: (): number | null => {
    try {
      const lastActivity = localStorage.getItem(SESSION_LAST_ACTIVITY_KEY);
      return lastActivity ? parseInt(lastActivity, 10) : null;
    } catch (error) {
      console.error("Failed to get last activity:", error);
      return null;
    }
  },

  isSessionExpired: (): boolean => {
    // With "Remember Me" removed and sessions effectively unlimited by default,
    // session expiration is now primarily governed by token expiry or explicit logout.
    // Therefore, we assume the session itself does not expire due to inactivity.
    return false;
  },

  // Clear session data (but keep user/token if rememberMe is true)
  clearSession: (clearAll: boolean = false) => {
    try {
      if (clearAll) {
        localStorage.removeItem(SESSION_PREFERENCES_KEY);
        localStorage.removeItem(SESSION_LAST_ACTIVITY_KEY);
      } else {
        // Only clear last activity, keep preferences
        localStorage.removeItem(SESSION_LAST_ACTIVITY_KEY);
      }
    } catch (error) {
      console.error("Failed to clear session:", error);
    }
  },
};

