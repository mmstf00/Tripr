import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import { Capacitor } from "@capacitor/core";

/**
 * Mobile OAuth Configuration Setup Guide
 *
 * This module provides utilities to help set up OAuth for both Android and iOS
 */

export const oauthSetup = {
  /**
   * Initialize Firebase for OAuth authentication
   * Call this once on app startup
   */
  initializeFirebase: async () => {
    try {
      if (!Capacitor.isNativePlatform()) {
        console.log("Not a native platform, skipping Firebase init");
        return;
      }

      // Firebase is initialized automatically via native configuration
      // But we can verify it's ready
      console.log("Firebase initialized for platform:", Capacitor.getPlatform());
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }
  },

  /**
   * Test OAuth connectivity
   */
  testOAuthConnection: async (): Promise<boolean> => {
    try {
      if (!Capacitor.isNativePlatform()) {
        console.log("Skipping OAuth test - not a native platform");
        return true;
      }

      // Test by attempting to get current user (should be null if not signed in)
      const result = await FirebaseAuthentication.getCurrentUser();
      console.log("OAuth connection test successful");
      return true;
    } catch (error) {
      console.error("OAuth connection test failed:", error);
      return false;
    }
  },

  /**
   * Get setup instructions for the current platform
   */
  getSetupInstructions: (): string => {
    const platform = Capacitor.getPlatform();

    if (platform === "android") {
      return `
Android OAuth Setup Instructions:
1. Generate OAuth Client ID from Google Cloud Console (Android OAuth 2.0 credentials)
2. Add Android package name: com.tripr.app
3. Generate SHA-1 certificate fingerprint:
   - Run: keytool -list -v -keystore ~/.android/debug.keystore
   - Password: android
4. Copy the SHA-1 fingerprint to Google Cloud Console
5. Download google-services.json from Firebase Console
6. Place google-services.json in android/app/
7. Update VITE_GOOGLE_CLIENT_ID_ANDROID in .env file
`;
    } else if (platform === "ios") {
      return `
iOS OAuth Setup Instructions:
1. Generate OAuth Client ID from Google Cloud Console (iOS OAuth 2.0 credentials)
2. Add iOS bundle ID: com.tripr.app
3. Add custom URL schemes in Info.plist:
   - com.googleusercontent.apps.YOUR_CLIENT_ID
   - com.tripr.app
4. Download GoogleService-Info.plist from Firebase Console
5. Add GoogleService-Info.plist to Xcode project
6. Update VITE_GOOGLE_CLIENT_ID_IOS in .env file
`;
    } else {
      return "Web OAuth uses standard Google OAuth flow via @react-oauth/google library";
    }
  },

  /**
   * Log OAuth configuration status
   */
  logConfigurationStatus: async () => {
    const platform = Capacitor.isNativePlatform() ? Capacitor.getPlatform() : "web";
    console.log("=== OAuth Configuration Status ===");
    console.log("Platform:", platform);

    if (Capacitor.isNativePlatform()) {
      console.log("Firebase Client ID (Android):", import.meta.env.VITE_GOOGLE_CLIENT_ID_ANDROID);
      console.log("Firebase Client ID (iOS):", import.meta.env.VITE_GOOGLE_CLIENT_ID_IOS);
    } else {
      console.log("Web Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    }

    console.log("API URL:", import.meta.env.VITE_API_URL);
    console.log("==================================");
  },
};
