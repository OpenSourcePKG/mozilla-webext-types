import {Tab} from '../Tabs/Tab';
import {WindowState} from './WindowState';
import {WindowType} from './WindowType';

/**
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#windows-window
 */
export interface Window {

    /**
     * Whether the window is set to be always on top.
     * @member {boolean}
     */
    alwaysOnTop: boolean;

    /**
     * Whether the window is currently the focused window.
     * @member {boolean}
     */
    focused: boolean;

    /**
     * Whether the window is incognito. Since Thunderbird does not support the incognito mode, this is always false.
     * @member {boolean}
     */
    incognito: boolean;

    /**
     * The height of the window, including the frame, in pixels.
     * @member {[number]}
     */
    height?: number;

    /**
     * The ID of the window. Window IDs are unique within a session.
     * @member {[number]}
     */
    id?: number;

    /**
     * The offset of the window from the left edge of the screen in pixels.
     * @member {[number]}
     */
    left?: number;

    /**
     * The state of this window.
     * @member {[WindowState]}
     */
    state?: WindowState;

    /**
     * Array of Tab objects representing the current tabs in the window. Only included if requested by
     * get(windowId, [getInfo]), getCurrent([getInfo]), getAll([getInfo]) or getLastFocused([getInfo]),
     * and the optional GetInfo parameter has its populate member set to true.
     * @member {[Tab[]]}
     */
    tabs?: Tab[];

    /**
     * The title of the window. Read-only.
     * @member {[string]}
     */
    readonly title?: string;

    /**
     * The offset of the window from the top edge of the screen in pixels.
     * @member {[number]}
     */
    top?: number;

    /**
     * The type of window this is.
     * @member {[WindowType]}
     */
    type?: WindowType;

    /**
     * The width of the window, including the frame, in pixels.
     * @member {[number]}
     */
    width?: number;

}