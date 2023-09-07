import {nsISupports} from './nsISupports';

/**
 * NsIScriptableInputStream provides scriptable access to an nsIInputStream instance.
 * @see https://searchfox.org/comm-central/source/mozilla/xpcom/io/nsIScriptableInputStream.idl
 */
export declare interface nsIScriptableInputStream extends nsISupports {

    /**
     * Closes the stream.
     */
    close(): void;
}