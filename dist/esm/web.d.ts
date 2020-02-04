import { WebPlugin } from '@capacitor/core';
import { KeyguardManagerPlugin } from './definitions';
export declare class KeyguardManagerWeb extends WebPlugin implements KeyguardManagerPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const KeyguardManager: KeyguardManagerWeb;
export { KeyguardManager };
