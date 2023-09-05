import {
    SchemaAPIManager
} from './SchemaAPIManager';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionParent.sys.mjs#91
 */
export interface APIManager extends SchemaAPIManager {

    getModuleJSONURLs(): string[];
}