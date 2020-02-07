package com.capacitor.keyguard.manager.plugin;

import android.app.KeyguardManager;
import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import static android.content.Context.KEYGUARD_SERVICE;

@NativePlugin()
public class KeyguardManagerPlugin extends Plugin {

    @PluginMethod()
    public void isDeviceSecure(PluginCall call) {
        Context myContext = getContext();
        KeyguardManager keyguardManager = (KeyguardManager)myContext.getSystemService(KEYGUARD_SERVICE);
        System.out.println("checking if android device is secure");
        System.out.println(keyguardManager.isDeviceSecure());
        JSObject ret = new JSObject();
        ret.put("value", keyguardManager.isDeviceSecure());
        call.success(ret);
    }
}

