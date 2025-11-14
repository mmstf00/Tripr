import { User } from "@/types/auth";

const USER_STORAGE_KEY = "tripr_user";
const TOKEN_STORAGE_KEY = "tripr_token";

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

  // Save token to localStorage
  saveToken: (token: string) => {
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
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

  // Clear authentication data
  clearAuth: () => {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear auth:", error);
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!authService.getUser() && !!authService.getToken();
  },
};

