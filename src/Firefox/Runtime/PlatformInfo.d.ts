/**
 * An object containing information about the current platform.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformInfo
 */
export declare interface PlatformInfo {

    /**
     * The operating system the browser is running on.
     * @member {string}
     */
    PlatformOs:
        // The underlying operating system is macOS.
        'mac' |
        // The underlying operating system is Windows.
        'win' |
        // The underlying operating system is Android.
        'android' |
        // The underlying operating system is Chrome OS.
        'cros' |
        // The underlying operating system is Linux.
        'linux' |
        // The underlying operating system is Open/FreeBSD.
        'openbsd' |
        // The underlying operating system is Fuchsia.
        'fuchsia';

    /**
     * The machine's processor architecture.
     * @member {string}
     */
    PlatformArch:
        // The platform is based on arm architecture.
        'arm' |
        // The platform is based on x86 32-bit architecture.
        'x86-32' |
        // The platform is based on x86 64-bit architecture.
        'x86-64';

    /**
     * The native client architecture. This may be different from arch on some platforms.
     * @member {string}
     */
    PlatformNaclArch:
        'arm' |
        'x86-32' |
        'x86-64';
}