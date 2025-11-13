import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tripr.app',
  appName: 'Tripr',
  webDir: 'dist',
  server: {
    url: 'https://29bf0091-b1dc-4c65-aa9c-c68943c8bb1a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
