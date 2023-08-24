import {nsIURI} from '../Base/nsIURI';

/**
 * ExtensionData
 * Represents the data contained in an extension, contained either
 * in a directory or a zip file, which may or may not be installed.
 * This class implements the functionality of the Extension class,
 * primarily related to manifest parsing and localization, which is
 * useful prior to extension installation or initialization.
 *
 * No functionality of this class is guaranteed to work before
 * `loadManifest` has been called, and completed.
 *
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/Extension.sys.mjs#760
 */
export interface ExtensionData {

    /**
     * rootURI
     */
    rootURI: nsIURI;

    /**
     * id
     */
    id: string;

    /**
     * callOnClose
     * Call the close() method on the given object when this extension
     * is shut down.  This can happen during browser shutdown, or when
     * an extension is manually disabled or uninstalled.
     *
     * @param obj
     */
    callOnClose(obj: object): void;

    /**
     * forgetOnClose
     * @param obj
     */
    forgetOnClose(obj: object): void;
}