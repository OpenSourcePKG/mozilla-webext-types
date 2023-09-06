import {BaseContext} from './BaseContext';
import {ExtensionData} from './ExtensionData';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#347
 */
export declare interface IExtensionAPI<T extends ExtensionData> {

    /**
     * @member {ExtensionData}
     */
    extension: T;

    /**
     */
    onStartup(): void;

    /**
     * @param {BaseContext<ExtensionData>} context
     * @returns {Record<string, unknown>}
     */
    getAPI(context: BaseContext<T>): Record<string, unknown>;
}