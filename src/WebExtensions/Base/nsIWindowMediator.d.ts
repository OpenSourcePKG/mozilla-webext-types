import {mozIDOMWindowProxy} from './mozIDOMWindowProxy';

/**
 * @see https://searchfox.org/mozilla-central/source/xpfe/appshell/nsIWindowMediator.idl#67
 */
export interface nsIWindowMediator {

    /**
     * This is a shortcut for simply fetching the first window in front to back order.
     * @param {string} aWindowType - Return the topmost window of this type.
     * ("type" is the |windowtype| attribute of the XML <window> element.)
     * If null, return the topmost window of any type.
     * @returns {mozIDOMWindowProxy} The topmost window.
     */
    getMostRecentWindow(aWindowType: string): mozIDOMWindowProxy;
}