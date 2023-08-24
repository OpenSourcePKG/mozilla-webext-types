import {RegisteredComposeScript} from './RegisteredComposeScript';
import {RegisteredComposeScriptOptions} from './RegisteredComposeScriptOptions';

/**
 * composeScripts
 * This compose scripts API first appeared in Thunderbird 77. Functionally it is the same as the content
 * scripts API except that it works on the document of email messages during composition.
 * See the MDN documentation for a more in-depth explanation and Changes in Thunderbird 77 for examples.
 *
 * See also executeScript, insertCSS, removeCSS, and messageDisplayScripts.
 *
 * Note:
 * Registering a compose script in the manifest.json file is not possible at this point.
 *
 * Permissions
 * 'sensitiveDataUpload' Transfer sensitive user data (if access has been granted) to a remote server for further processing
 *
 * Note:
 * The permission compose is required to use messenger.composeScripts.*.
 *
 * @see https://webextension-api.thunderbird.net/en/115/composeScripts.html
 */
export interface ComposeScripts {

    /**
     * register
     * Register a compose script programmatically
     *
     * @param composeScriptOptions
     */
    register(composeScriptOptions: RegisteredComposeScriptOptions): Promise<RegisteredComposeScript>;
}