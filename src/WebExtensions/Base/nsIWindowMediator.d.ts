import {mozIDOMWindowProxy} from './mozIDOMWindowProxy';

/**
 * @see https://searchfox.org/mozilla-central/source/xpfe/appshell/nsIWindowMediator.idl#67
 */
export interface nsIWindowMediator {

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
     * @param {string|null} aWindowType -
     */
    getMostRecentNonPBWindow(aWindowType: string|null): mozIDOMWindowProxy;
}