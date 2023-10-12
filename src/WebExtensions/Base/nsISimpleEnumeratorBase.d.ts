import {nsIIDRef} from './nsIIDRef';
import {nsIJSEnumerator} from './nsIJSEnumerator';
import {nsISupports} from './nsISupports';

/**
 * @see https://searchfox.org/mozilla-central/source/xpcom/ds/nsISimpleEnumerator.idl
 */
export declare interface nsISimpleEnumeratorBase extends nsISupports {

    /**
     * Returns a JavaScript iterator for all remaining entries in the enumerator.
     * Each entry is typically queried to the appropriate interface for the
     * enumerator.
     * @returns {nsIJSEnumerator}
     */
    iterator(): nsIJSEnumerator;

    /**
     * Returns JavaScript iterator for all remaining entries in the enumerator.
     * Each entry is queried only to the supplied interface. If any element
     * fails to query to that interface, the error is propagated to the caller.
     * @param {nsIIDRef} aIface
     * @returns {nsIJSEnumerator}
     */
    entries(aIface: nsIIDRef): nsIJSEnumerator;

}