import {BaseContext as BC} from './Extensions/BaseContext';
import {ExtensionAPI as EAPI} from './Extensions/ExtensionAPI';
import {ExtensionData} from './Extensions/ExtensionData';

/**
 * Globals available in the API scripts global.
 * @see https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/basics.html
 * @see https://searchfox.org/comm-central/source/mozilla/toolkit/components/extensions/ExtensionCommon.sys.mjs#3004
 */
declare namespace ExtensionCommon {

    export const BaseContext: BC<ExtensionData>;

    export abstract class ExtensionAPI extends EAPI {}

}