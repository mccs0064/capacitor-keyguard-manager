declare module "@capacitor/core" {
  interface PluginRegistry {
    KeyguardManager: KeyguardManagerPlugin;
  }
}

export interface KeyguardManagerPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  isDeviceSecure(): Promise<{value: boolean}>;
}
