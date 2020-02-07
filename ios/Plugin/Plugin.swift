import Foundation
import Capacitor
import LocalAuthentication

@objc(KeyguardManagerPlugin)
public class KeyguardManagerPlugin: CAPPlugin {
    
    @objc func isDeviceSecure(_ call: CAPPluginCall) {
        
        call.success([
            "value": devicePasscodeSet()
        ])
    }


    private func devicePasscodeSet() -> Bool {
        //checks to see if devices (not apps) passcode has been set
        return LAContext().canEvaluatePolicy(.deviceOwnerAuthentication, error: nil)
      }
}
