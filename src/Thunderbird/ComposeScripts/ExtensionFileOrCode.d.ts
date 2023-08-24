/**
 * ExtensionFileOrCode
 * Specify code, either by pointing to a file or by providing the code directly. Only one of the two is allowed.
 *
 * @see https://webextension-api.thunderbird.net/en/115/composeScripts.html#extensionfileorcode
 */
export interface ExtensionFileOrCode {

    /**
     * code
     * Some JavaScript code to register.
     */
    code?: string;

    /**
     * file
     * A URL starting at the extension’s manifest.json and pointing to a JavaScript file to register.
     */
    file?: string;
}