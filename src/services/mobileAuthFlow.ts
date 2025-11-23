import { User } from "@/types/auth";
import { Capacitor } from "@capacitor/core";
import { authService } from "./auth";
import { mobileAuthService } from "./mobileAuth";

export interface AuthFlowResult {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

/**
 * Mobile-specific authentication flow handler
 * Manages OAuth flows for both native mobile apps and web browsers
 */
export const mobileAuthFlow = {
  /**
   * Execute platform-appropriate authentication flow
   */
  authenticate: async (): Promise<AuthFlowResult> => {
    try {
      // Check if running on native platform
      if (!Capacitor.isNativePlatform()) {
        return {
          success: false,
          error: "Not running on native platform. Use web OAuth flow instead.",
        };
      }

      // Sign in with Google using Firebase
      const authResult = await mobileAuthService.signInWithGoogle();

      if (!authResult) {
        return {
          success: false,
          error: "Google Sign-In was cancelled or failed",
        };
      }

      // Send token to backend for validation and session creation
      const user = await authService.loginWithBackend(authResult.accessToken);

      if (!user) {
        return {
          success: false,
          error: "Failed to create backend session",
        };
      }

      return {
        success: true,
        user,
        token: authResult.accessToken,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.error("Authentication flow error:", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Handle silent sign-in if user is already authenticated
   */
  silentSignIn: async (): Promise<AuthFlowResult> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return {
          success: false,
          error: "Not running on native platform",
        };
      }

      // Check if already signed in
      const isSignedIn = await mobileAuthService.isSignedIn();

      if (!isSignedIn) {
        return {
          success: false,
          error: "User not signed in",
        };
      }

      // Get current user
      const currentUser = await mobileAuthService.getCurrentUser();

      if (!currentUser) {
        return {
          success: false,
          error: "Failed to retrieve user information",
        };
      }

      // Get ID token
      const token = await mobileAuthService.getIdToken();

      if (!token) {
        return {
          success: false,
          error: "Failed to retrieve authentication token",
        };
      }

      // Try to restore backend session
      const user = await authService.loginWithBackend(token);

      if (!user) {
        return {
          success: false,
          error: "Failed to restore backend session",
        };
      }

      return {
        success: true,
        user,
        token,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.error("Silent sign-in error:", errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    }
  },

  /**
   * Handle logout for mobile apps
   */
  logout: async (): Promise<boolean> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return true;
      }

      // Sign out from mobile auth
      const mobileSignOutSuccess = await mobileAuthService.signOut();

      // Sign out from backend
      await authService.logoutFromBackend();

      // Clear local auth data
      await authService.clearAuth();

      return mobileSignOutSuccess;
    } catch (error) {
      console.error("Logout error:", error);
      // Still clear local data even if logout fails
      await authService.clearAuth();
      return false;
    }
  },

  /**
   * Handle token refresh for mobile apps
   */
  refreshToken: async (): Promise<string | null> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return null;
      }

      // Get new ID token from Firebase
      const newToken = await mobileAuthService.getIdToken();

      if (!newToken) {
        return null;
      }

      // Update local token
      authService.saveToken(newToken);

      return newToken;
    } catch (error) {
      console.error("Token refresh error:", error);
      return null;
    }
  },

  /**
   * Get current authentication status
   */
  getAuthStatus: async (): Promise<{
    isAuthenticated: boolean;
    user?: User;
    platform?: string;
  }> => {
    try {
      const savedUser = authService.getUser();
      const token = authService.getToken();
      const platform = mobileAuthService.getPlatform();

      if (!savedUser || !token) {
        return {
          isAuthenticated: false,
          platform: platform || undefined,
        };
      }

      // Check if token is expired
      if (authService.isTokenExpired()) {
        return {
          isAuthenticated: false,
          platform: platform || undefined,
        };
      }

      // Check if session is expired
      if (authService.isSessionExpired()) {
        return {
          isAuthenticated: false,
          platform: platform || undefined,
        };
      }

      return {
        isAuthenticated: true,
        user: savedUser,
        platform: platform || undefined,
      };
    } catch (error) {
      console.error("Error getting auth status:", error);
      return {
        isAuthenticated: false,
      };
    }
  },

  /**
   * Check if platform supports mobile authentication
   */
  isMobileAuthAvailable: (): boolean => {
    return (
      Capacitor.isNativePlatform() &&
      (Capacitor.getPlatform() === "ios" ||
        Capacitor.getPlatform() === "android")
    );
  },

  /**
   * Get authentication platform info
   */
  getPlatformInfo: () => {
    return {
      isNative: Capacitor.isNativePlatform(),
      platform: mobileAuthService.getPlatform(),
      supportsGoogleAuth: mobileAuthService.isNativePlatform(),
    };
  },
};
