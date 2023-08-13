import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'live.app.inthewind',
  appName: 'inthewind',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
