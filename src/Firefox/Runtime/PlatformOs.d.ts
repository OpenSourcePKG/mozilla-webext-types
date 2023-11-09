/**
 * The operating system the browser is running on.
 * @type {string}
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformOs
 */
export type PlatformOs =
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