import {
  FirebaseAuthentication,
  SignInResult,
} from "@capacitor-firebase/authentication";
import { Capacitor } from "@capacitor/core";

interface MobileAuthResponse {
  accessToken: string;
  idToken?: string;
  user?: {
    id: string;
    email: string;
    name: string;
    picture?: string;
  };
}

// Get Web Client ID from environment - this is required for Credential Manager on Android
const WEB_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

export const mobileAuthService = {
  /**
   * Initialize Firebase Authentication for native mobile app
   */
  initializeAuth: async () => {
    try {
      if (!Capacitor.isNativePlatform()) {
        // Not a native platform, skipping mobile auth init
        return;
      }
    } catch (error) {
      console.error("Failed to initialize Firebase Auth:", error);
    }
  },

  /**
   * Sign in with Google on mobile using Firebase
   * Attempts Credential Manager first, falls back to browser-based sign-in if no credentials available
   */
  signInWithGoogle: async (): Promise<MobileAuthResponse | null> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return null;
      }

      if (!WEB_CLIENT_ID) {
        throw new Error("Web Client ID not configured. Please set VITE_GOOGLE_CLIENT_ID in environment variables.");
      }

      // Try to sign in with Google
      // The Firebase plugin handles the UI - either showing saved credentials or opening browser
      const result: SignInResult = await FirebaseAuthentication.signInWithGoogle();

      if (!result.user) {
        throw new Error("No user data received from Google SignIn");
      }

      // Get ID token for backend verification
      const idToken = await FirebaseAuthentication.getIdToken({
        forceRefresh: false,
      });

      return {
        accessToken: idToken.token,
        idToken: idToken.token,
        user: {
          id: result.user.uid,
          email: result.user.email || "",
          name: result.user.displayName || result.user.email?.split("@")[0] || "",
          picture: result.user.photoUrl,
        },
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Google SignIn failed:", errorMessage);
      // Re-throw the error so the UI can handle it
      throw error;
    }
  },

  /**
   * Sign out from Google
   */
  signOut: async (): Promise<boolean> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return true;
      }

      await FirebaseAuthentication.signOut();
      return true;
    } catch (error) {
      console.error("Google SignOut failed:", error);
      return false;
    }
  },

  /**
   * Check if user is already signed in
   */
  isSignedIn: async (): Promise<boolean> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return false;
      }

      const result = await FirebaseAuthentication.getCurrentUser();
      return result.user !== null;
    } catch (error) {
      console.error("Error checking sign-in status:", error);
      return false;
    }
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<MobileAuthResponse["user"] | null> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return null;
      }

      const result = await FirebaseAuthentication.getCurrentUser();

      if (!result.user) {
        return null;
      }

      return {
        id: result.user.uid,
        email: result.user.email || "",
        name: result.user.displayName || result.user.email?.split("@")[0] || "",
        picture: result.user.photoUrl,
      };
    } catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
  },

  /**
   * Get ID token
   */
  getIdToken: async (): Promise<string | null> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        return null;
      }

      const result = await FirebaseAuthentication.getIdToken({
        forceRefresh: false,
      });

      return result.token || null;
    } catch (error) {
      console.error("Error getting ID token:", error);
      return null;
    }
  },

  /**
   * Check if we're running on a native platform
   */
  isNativePlatform: (): boolean => {
    return Capacitor.isNativePlatform();
  },

  /**
   * Get platform type
   */
  getPlatform: (): string | null => {
    if (Capacitor.isNativePlatform()) {
      return Capacitor.getPlatform();
    }
    return null;
  },
};
