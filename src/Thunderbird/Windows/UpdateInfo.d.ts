import {WindowState} from './WindowState';

/**
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#update-windowid-updateinfo
 */
export interface UpdateInfo {

    /**
     * Setting this to true will cause the window to be displayed in a manner that draws the user’s attention to the
     * window, without changing the focused window. The effect lasts until the user changes focus to the window.
     * This option has no effect if the window already has focus.
     * @member {[boolean]}
     */
    drawAttention?: boolean;

    /**
     * If true, brings the window to the front. If false, brings the next window in the z-order to the front.
     * @member {[boolean]}
     */
    focused?: boolean;

    /**
     * The height to resize the window to in pixels.
     * @member {[number]}
     */
    height?: number;

    /**
     * The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels.
     * @member {[number]}
     */
    left?: number;

    /**
     * The new state of the window. The minimized, maximized and fullscreen states cannot be combined with
     * left, top, width or height.
     * @member {[WindowState]}
     */
    state?: WindowState;

    /**
     * A string to add to the beginning of the window title.
     * @member {[string]}
     */
    titlePreface?: string;

    /**
     * The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
     * @member {[number]}
     */
    top?: number;

    /**
     * The width to resize the window to in pixels.
     * @member {[number]}
     */
    width?: number;
}