import {mozIDOMWindowProxy} from './mozIDOMWindowProxy';
import {nsISimpleEnumerator} from './nsISimpleEnumerator.js';
import {nsISupports} from './nsISupports.js';

/**
 * @see https://searchfox.org/mozilla-central/source/xpfe/appshell/nsIWindowMediator.idl#67
 */
export interface nsIWindowMediator extends nsISupports {

    /**
     * Return an enumerator which iterates over all windows of type aWindowType
     * from the oldest window to the youngest.
     * @param {string} aWindowType - The returned enumerator will enumerate only windows of this type.
     * ("type" is the |windowtype| attribute of the XML <window> element.) If null, all windows will be enumerated.
     * @returns An enumerator of nsIDOMWindows.  Note that windows close asynchronously in many cases, so windows
     * returned {nsISimpleEnumerator} from this enumerator can have .closed set to true.  Caveat enumerator!
     */
    getEnumerator(aWindowType: string): nsISimpleEnumerator<any>;

    /**
     * This is a shortcut for simply fetching the first window in front to back order.
     * @param {string|null} aWindowType - Return the topmost window of this type.
     * ("type" is the |windowtype| attribute of the XML <window> element.)
     * If null, return the topmost window of any type.
     * @returns {mozIDOMWindowProxy} The topmost window.
     */
    getMostRecentWindow(aWindowType: string|null): mozIDOMWindowProxy;

    /**
     * This is a shortcut for getMostRecentWindow('navigator:browser'), but
     * if that fails it also tries 'navigator:geckoview' and 'mail:3pane'.
     * @returns {mozIDOMWindowProxy} The topmost browser window.
     */
    getMostRecentBrowserWindow(): mozIDOMWindowProxy;

    /**
     * Same as getMostRecentWindow, but ignores private browsing windows.
     * @param {string|null} aWindowType
     * @returns {mozIDOMWindowProxy}
     */
    getMostRecentNonPBWindow(aWindowType: string|null): mozIDOMWindowProxy;

    /**
     * Return the outer window with the given ID, if any.  Can return null.
     * @param {number} aOuterWindowID
     * @returns {mozIDOMWindowProxy|null}
     */
    getOuterWindowWithId(aOuterWindowID: number): mozIDOMWindowProxy|null;
}