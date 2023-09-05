import {BaseContext} from './BaseContext';
import {ExtensionData} from './ExtensionData';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#347
 */
export declare class ExtensionAPI<T extends ExtensionData> {

    /**
     * @member {ExtensionData}
     */
    public extension: T;

    /**
     * @param {ExtensionData} ext
     */
    public constructor(ext: T);

    /**
     */
    public onStartup(): void;

    /**
     */
    public destroy(): void;

    /**
     * @param {any} entry
     */
    public onManifestEntry(entry: any): void;

    /**
     * @param {BaseContext<ExtensionData>} context@
     * @returns {Record<string, unknown>}
     */
    public getAPI(context: BaseContext<T>): Record<string, unknown>;
}