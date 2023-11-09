/**
 * The machine's processor architecture.
 * @type {string}
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformArch
 */
export type PlatformArch =
    // The platform is based on arm architecture.
    'arm' |
    // The platform is based on x86 32-bit architecture.
    'x86-32' |
    // The platform is based on x86 64-bit architecture.
    'x86-64';