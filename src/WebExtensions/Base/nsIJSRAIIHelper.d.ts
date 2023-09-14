import {nsISupports} from './nsISupports';

/**
 * JS doesn't do RAII very well. We can use this interface to make remembering to destruct an object in a finally clause easier.
 * @see https://searchfox.org/mozilla-central/source/dom/interfaces/base/nsIDOMWindowUtils.idl#2333
 */
export declare interface nsIJSRAIIHelper extends nsISupports {
    destruct(): void;
}