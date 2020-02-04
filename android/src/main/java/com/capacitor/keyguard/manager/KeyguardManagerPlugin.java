package com.capacitor.keyguard.manager;

import android.app.KeyguardManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class KeyguardManagerPlugin extends Plugin {

    private KeyguardManager keyguardManager;


    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void isDeviceSecure(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("value", keyguardManager.isDeviceSecure());
        call.success(ret);
    }
}
