import {nsISupports} from './nsISupports';

/**
 * A wrapper for an nsISimpleEnumerator instance which implements the JavaScript iteration protocol.
 * @see https://searchfox.org/mozilla-central/source/xpcom/ds/nsISimpleEnumerator.idl
 */
export declare interface nsIJSEnumerator extends nsISupports {

    iterator(): nsIJSEnumerator;

    next(): any;
}