import {PlatformArch} from './PlatformArch';
import {PlatformNaclArch} from './PlatformNaclArch';
import {PlatformOs} from './PlatformOs';

/**
 * An object containing information about the current platform.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/PlatformInfo
 */
export declare interface PlatformInfo {

    /**
     * The platform's operating system.
     * @member {string}
     */
    os: PlatformOs;

    /**
     * The machine's processor architecture.
     * @member {string}
     */
    arch: PlatformArch;

    /**
     * The native client architecture. This may be different from arch on some platforms.
     * @member {string}
     */
    nacl_arch: PlatformNaclArch;

}