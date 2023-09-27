import {CreateData} from './CreateData';
import {GetInfo} from './GetInfo';
import {UpdateInfo} from './UpdateInfo';
import {Window} from './Window';

/**
 * The windows API supports creating, modifying and interacting with Thunderbird windows.
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#windows-window
 */
export interface Windows {

    /**
     * Gets details about a window.
     * @param {number} windowId
     * @param {[GetInfo]} getInfo
     * @returns {Window}
     */
    get(windowId: number, getInfo?: GetInfo): Promise<Window>;

    /**
     * Gets the active or topmost window.
     * @param {[GetInfo]} getInfo
     * @returns {Window}
     */
    getCurrent(getInfo?: GetInfo): Promise<Window>;

    /**
     * Gets the window that was most recently focused — typically the window ‘on top’.
     * @param {[GetInfo]} getInfo
     * @returns {Window}
     */
    getLastFocused(getInfo?: GetInfo): Promise<Window>;

    /**
     * Gets all windows.
     * @param {[GetInfo]} getInfo
     * @returns {Window[]}
     */
    getAll(getInfo?: GetInfo): Promise<Window[]>;

    /**
     * Creates (opens) a new window with any optional sizing, position or default URL provided. When loading a page
     * into a popup window, same-site links are opened within the same window, all other links are opened in the
     * user’s default browser. To override this behavior, add-ons have to register a content script , capture click
     * events and handle them manually. Same-site links with targets other than _self are opened in a new tab in the
     * most recent normal Thunderbird window.
     * @param {CreateData} createData
     * @returns {Window} Contains details about the created window.
     */
    create(createData: CreateData): Promise<Window>;

    /**
     * Updates the properties of a window. Specify only the properties that you want to change;
     * unspecified properties will be left unchanged.
     * @param {number} windowId
     * @param {UpdateInfo} updateInfo
     * @returns {Window}
     */
    update(windowId: number, updateInfo: UpdateInfo): Promise<Window>;

    /**
     *
     * Removes (closes) a window, and all the tabs inside it.
     * @param {number} windowId
     */
    remove(windowId: number): void;

    /**
     * Opens the provided URL in the default system browser.
     * @param {string} url
     */
    openDefaultBrowser(url: string): void;
}