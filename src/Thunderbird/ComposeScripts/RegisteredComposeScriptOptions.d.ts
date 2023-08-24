import {ExtensionFileOrCode} from './ExtensionFileOrCode';

/**
 * RegisteredComposeScriptOptions
 * Details of a compose script registered programmatically
 *
 * @see https://webextension-api.thunderbird.net/en/115/composeScripts.html#registeredcomposescriptoptions
 */
export interface RegisteredComposeScriptOptions {

    /**
     * css
     * The list of CSS files to inject
     */
    css?: ExtensionFileOrCode[];

    /**
     * js
     * The list of JavaScript files to inject
     */
    js?: ExtensionFileOrCode[];
}