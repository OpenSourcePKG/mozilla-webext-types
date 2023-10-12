import {nsISimpleEnumeratorBase} from './nsISimpleEnumeratorBase';
import {nsISupports} from './nsISupports';

/**
 * @see https://searchfox.org/mozilla-central/source/xpcom/ds/nsISimpleEnumerator.idl
 */
export interface nsISimpleEnumerator<T extends nsISupports> extends nsISimpleEnumeratorBase {

    /**
     * Called to determine whether or not the enumerator has
     * any elements that can be returned via getNext(). This method
     * is generally used to determine whether or not to initiate or
     * continue iteration over the enumerator, though it can be
     * called without subsequent getNext() calls. Does not affect
     * internal state of enumerator.
     * @returns {boolean} True if there are remaining elements in the enumerator.
     * False if there are no more elements in the enumerator.
     * @see getNext()
     */
    hasMoreElements(): boolean;

    /**
     * Called to retrieve the next element in the enumerator. The "next"
     * element is the first element upon the first call. Must be
     * pre-ceeded by a call to hasMoreElements() which returns PR_TRUE.
     * This method is generally called within a loop to iterate over
     * the elements in the enumerator.
     * @returns {nsISupports} The next element in the enumeration.
     * @throws NS_ERROR_FAILURE if there are no more elements to enumerate.
     * @see hasMoreElements()
     */
    getNext(): T;
}