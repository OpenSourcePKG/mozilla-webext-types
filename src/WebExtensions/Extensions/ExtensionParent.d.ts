import {APIManager} from './Parent/APIManager';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionParent.sys.mjs
 */
export interface ExtensionParent {

    apiManager: APIManager;
}