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
        console.log("Not a native platform, skipping mobile auth init");
        return;
      }

      console.log("Initializing Firebase Authentication for platform:", Capacitor.getPlatform());
      // Firebase is already initialized via native configuration
      console.log("Firebase Authentication ready on", Capacitor.getPlatform());
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
        console.log("Not a native platform, cannot use native Google SignIn");
        return null;
      }

      if (!WEB_CLIENT_ID) {
        throw new Error("Web Client ID not configured. Please set VITE_GOOGLE_CLIENT_ID in environment variables.");
      }

      console.log("Attempting Google SignIn via Firebase...");

      // Try to sign in with Google
      // The Firebase plugin handles the UI - either showing saved credentials or opening browser
      const result: SignInResult = await FirebaseAuthentication.signInWithGoogle();

      if (!result.user) {
        throw new Error("No user data received from Google SignIn");
      }

      console.log("Google SignIn successful, user:", result.user.email);

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

      // Log helpful debugging info
      if (errorMessage.includes("No credentials available")) {
        console.warn("No saved Google credentials found. Ensure a Google account is added to the device.");
        console.warn("On emulator: Settings > Accounts > Add account > Google");
        console.warn("On physical device: Settings > Accounts > Add a Google account");
      }

      return null;
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
