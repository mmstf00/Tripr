import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tripr.app',
  appName: 'Tripr',
  webDir: 'dist',
  android: {
    buildOptions: {
      keystorePath: 'C:\\Users\\MSI\\.android\\debug.keystore',
      keystorePassword: 'android',
      keystoreAlias: 'androiddebugkey',
      keystoreAliasPassword: 'android',
      releaseType: 'APK'
    },
    webContentsDebuggingEnabled: true,
  },
  server: {
    cleartext: true,
    // Allow mixed content on development server
    androidScheme: 'http',
    hostname: '192.168.0.212',
  },
  ios: {
    buildOptions: {
      signingStyle: 'automatic',
      exportMethod: 'development'
    }
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com"],
    },
  },
};

export default config;
