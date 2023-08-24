import {BaseContext} from './BaseContext';
import {ExtensionData} from './ExtensionData';

/**
 * ExtensionAPI
 * Base class for WebExtension APIs.  Each API creates a new class
 * that inherits from this class, the derived class is instantiated
 * once for each extension that uses the API.
 *
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#347
 */
export abstract class ExtensionAPI {

    /**
     * extension
     */
    public extension: ExtensionData;

    /**
     * constructor
     * @param extension
     */
    public constructor(extension: ExtensionData);

    /**
     * destroy
     */
    public destroy(): void;

    /**
     * onManifestEntry
     * @param entry
     */
    public onManifestEntry(entry: any): void;

    /**
     * getAPI
     * for Thunderbird use
     * @param context
     */
    public abstract getAPI(context: BaseContext<ExtensionData>): Record<string, unknown>;

}