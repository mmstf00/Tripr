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
    }
  },
  ios: {
    buildOptions: {
      signingStyle: 'automatic',
      exportMethod: 'development'
    }
  }
};

export default config;
