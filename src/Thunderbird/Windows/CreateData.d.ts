import {CreateType} from './CreateType';
import {WindowState} from './WindowState';

/**
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#create-createdata
 */
export interface CreateData {

    /**
     * Allow scripts running inside the window to close the window by calling window.close().
     * @member {[boolean]}
     */
    allowScriptsToClose?: boolean;

    /**
     * The CookieStoreId to use for all tabs that were created when the window is opened.
     * @member {[string]}
     */
    cookieStoreId?: string;

    /**
     * Unsupported. If true, opens an active window. If false, opens an inactive window.
     * @member {boolean}
     */
    focused?: boolean;

    /**
     * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
     * @member {[number]}
     */
    height?: number;

    /**
     * Unsupported.
     * @member {[number]}
     */
    incognito?: boolean;

    /**
     * The number of pixels to position the new window from the left edge of the screen. If not specified,
     * the new window is offset naturally from the last focused window.
     * @member {[number]}
     */
    left?: number;

    /**
     * The initial state of the window. The minimized, maximized and fullscreen states cannot be combined with
     * left, top, width or height.
     * @member {[WindowState]}
     */
    state?: WindowState;

    /**
     * The id of the tab for which you want to adopt to the new window.
     * @member {[number]}
     */
    tabId?: number;

    /**
     * A string to add to the beginning of the window title.
     * @member {[string]}
     */
    titlePreface?: string;

    /**
     * The number of pixels to position the new window from the top edge of the screen. If not specified,
     * the new window is offset naturally from the last focused window.
     * @member {[top]}
     */
    top?: number;

    /**
     * Specifies what type of window to create. Thunderbird does not support panel and detached_panel,
     * they are interpreted as popup.
     * @member {[CreateType]}
     */
    type?: CreateType;

    /**
     * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme
     * (i.e. http://www.google.com, not www.google.com). Relative URLs will be relative to the current
     * page within the extension. Defaults to the New Tab Page.
     * @member {[string|string[]]}
     */
    url?: string|string[];

    /**
     * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
     * @member {number}
     */
    width?: number;
}