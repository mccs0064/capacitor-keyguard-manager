import { WebPlugin } from '@capacitor/core';
import { KeyguardManagerPlugin } from './definitions';

export class KeyguardManagerWeb extends WebPlugin implements KeyguardManagerPlugin {
  constructor() {
    super({
      name: 'KeyguardManager',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async isDeviceSecure(): Promise<{value: boolean}> {
    throw new Error('No web implementation')
  }
}

const KeyguardManager = new KeyguardManagerWeb();

export { KeyguardManager };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(KeyguardManager);
