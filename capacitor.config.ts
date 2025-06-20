import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vancouverdeals.app',
  appName: '温哥华生活',
  webDir: 'out',
};

export default {
  appId: 'com.yourcompany.vancouverdeals', // 这里填写你的唯一包名（可自定义）
  appName: 'Vancouver Deals', // 这里填写你的 App 名称
  webDir: 'out',
  bundledWebRuntime: false,
};
