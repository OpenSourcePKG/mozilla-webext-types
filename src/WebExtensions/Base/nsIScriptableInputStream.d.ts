import {nsIInputStream} from './nsIInputStream';
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

    /**
     * Wrap the given nsIInputStream with this nsIScriptableInputStream.
     * @param {nsIInputStream} aInputStream - AInputStream parameter providing the stream to wrap.
     */
    init(aInputStream: nsIInputStream): void;

    /**
     * Return the number of bytes currently available in the stream.
     * @returns {number} The number of bytes.
     * @throws NS_BASE_STREAM_CLOSED if called after the stream has been closed.
     */
    available(): number;

    /**
     * Read data from the stream.
     * WARNING: If the data contains a null byte, then this method will return a truncated string.
     * @param {number} aCount - ACount the maximum number of bytes to read.
     * @returns The data, which will be an empty string if the stream is at EOF.
     * @throws NS_BASE_STREAM_CLOSED if called after the stream has been closed.
     * @throws NS_ERROR_NOT_INITIALIZED if init was not called.
     */
    read(aCount: number): string;
}