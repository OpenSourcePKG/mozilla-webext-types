import {RunAt} from './RunAt';

/**
 * InjectDetails
 * An object describing the script to run.
 *
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
 */
export interface InjectDetails {

    /**
     * allFrames
     * If true, the code will be injected into all frames of the current page.
     * If true and frameId is set, then it will raise an error. (frameId and allFrames are mutually exclusive.)
     * If it is false, code is only injected into the top frame.
     * Defaults to false.
     */
    allFrames?: boolean;

    /**
     * code
     * Code to inject, as a text string.
     * Warning: Don't use this property to interpolate untrusted data into JavaScript, as this could lead to a security issue.
     */
    code?: string;

    /**
     * file
     * Path to a file containing the code to inject.
     * - In Firefox, relative URLs not starting at the extension root are resolved relative to the current page URL.
     * - In Chrome, these URLs are resolved relative to the extension's base URL.
     *
     * To work cross-browser, you can specify the path as a relative URL, starting at the extension's root, like this: "/path/to/script.js".
     */
    file?: string;

    /**
     * frameId
     * The frame where the code should be injected.
     * Defaults to 0 (the top-level frame).
     */
    frameId?: number;

    /**
     * matchAboutBlank
     * If true, the code will be injected into embedded about:blank and about:srcdoc frames if your extension
     * has access to their parent document. The code cannot be inserted in top-level about: frames.
     * Defaults to false.
     */
    matchAboutBlank?: boolean;

    /**
     * runAt
     * The soonest that the code will be injected into the tab.
     * Defaults to "document_idle".
     */
    runAt?: RunAt;
}