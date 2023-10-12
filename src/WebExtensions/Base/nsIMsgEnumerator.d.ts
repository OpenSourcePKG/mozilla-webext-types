import {nsIMsgDBHdr} from './nsIMsgDBHdr';
import {nsISupports} from './nsISupports';

/**
 * NsIMsgEnumerator is an object for iterating forward over an ordered set of
 * messages (nsIMsgHdrs). There is no provision to reset the iteration.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgEnumerator.idl
 */
export declare interface nsIMsgEnumerator extends nsISupports {

    /**
     * Called to determine whether or not there are any messages remaining
     * to be retrieved from the enumerator.
     * @returns {boolean} True if getNext() may be called to fetch a message, or false if there are no more messages.
     */
    hasMoreElements(): boolean;

    /**
     * Called to retrieve the next message in the set.
     * @returns {nsIMsgDBHdr} The next element in the enumeration.
     */
    getNext(): nsIMsgDBHdr;
}