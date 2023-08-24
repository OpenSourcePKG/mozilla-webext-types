import {ExtensionData} from './ExtensionData';

/**
 * BaseContext
 * This class contains the information we have about an individual
 * extension.  It is never instantiated directly, instead subclasses
 * for each type of process extend this class and add members that are
 * relevant for that process.
 *
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#442
 */
export interface BaseContext<E extends ExtensionData> {

    /**
     * extension
     */
    extension: E;

    /**
     * isProxyContextParent
     */
    isProxyContextParent(): boolean;

    /**
     * privateBrowsingAllowed
     */
    privateBrowsingAllowed(): boolean;

    /**
     * isBackgroundContext
     */
    isBackgroundContext(): boolean;

    /**
     * useWebIDLBindings
     */
    useWebIDLBindings(): boolean;
}