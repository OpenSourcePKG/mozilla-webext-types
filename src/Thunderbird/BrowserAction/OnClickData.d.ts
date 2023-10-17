/**
 * Information sent when an action button is clicked.
 * @see https://webextension-api.thunderbird.net/en/stable/browserAction.html#browseraction-onclickdata
 */
export declare interface OnClickData {

    /**
     * An array of keyboard modifiers that were held while the menu item was clicked.
     *
     * Supported values:
     *
     * - Shift
     * - Alt
     * - Command (Only available on macOS.)
     * - Ctrl (Not available on macOS.)
     * - MacCtrl (Only available on macOS, but of limited use in a click event: Holding down the CTRL key while
     * clicking with the mouse is referred to as a ‘CTRL click’ under macOS and is interpreted as a right mouse click.
     * In a default profile the dom.event.treat_ctrl_click_as_right_click.disabled preference is not enabled and the
     * MacCtrl modifier key is not forwarded to the API.).
     * @member {string[]}
     */
    modifiers: string[];

    /**
     * An integer value of button by which menu item was clicked.
     * @member {number}
     */
    button?: number;
}