Java.perform(() => {
    const module = Java.use("com.gantix.JailMonkey.JailMonkeyModule");
    const hashmap = Java.use("java.util.HashMap");
    const bye = Java.use("java.lang.Boolean").FALSE.value;

    module.getConstants.implementation = function () {
        var hm = hashmap.$new();
        hm.put("isJailBroken", bye);
        hm.put("rootedDetectionMethods", bye);
        hm.put("hookDetected", bye);
        hm.put("canMockLocation", bye);
        hm.put("isOnExternalStorage", bye);
        hm.put("AdbEnabled", bye);
        return hm;
    };
});