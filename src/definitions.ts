declare global {
  interface PluginRegistry {
    KeyguardManagerPlugin: KeyguardManagerPlugin;
  }
}

export interface KeyguardManagerPlugin {
  isDeviceSecure(): Promise<{value: boolean}>;
}
