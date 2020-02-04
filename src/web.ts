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
}

const KeyguardManager = new KeyguardManagerWeb();

export { KeyguardManager };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(KeyguardManager);
