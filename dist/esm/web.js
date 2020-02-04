var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class KeyguardManagerWeb extends WebPlugin {
    constructor() {
        super({
            name: 'KeyguardManager',
            platforms: ['web']
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ECHO', options);
            return options;
        });
    }
    isDeviceSecure() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('No web implementation');
        });
    }
}
const KeyguardManager = new KeyguardManagerWeb();
export { KeyguardManager };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(KeyguardManager);
//# sourceMappingURL=web.js.map