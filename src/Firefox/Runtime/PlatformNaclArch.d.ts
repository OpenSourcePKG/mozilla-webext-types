/**
 * The native client architecture. This may be different from arch on some platforms.
 * @type {string}
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformNaclArch
 */
export type PlatformNaclArch =
    'arm' |
    'x86-32' |
    'x86-64';