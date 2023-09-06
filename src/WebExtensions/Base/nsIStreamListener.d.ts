import {nsIRequestObserver} from './nsIRequestObserver';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/netwerk/base/nsIStreamListener.idl
 */
export declare interface nsIStreamListener extends nsIRequestObserver {

    /**
     * Called when the next chunk of data (corresponding to the request) may
     * be read without blocking the calling thread.  The onDataAvailable impl
     * must read exactly |aCount| bytes of data before returning.
     * NOTE: The aInputStream parameter must implement readSegments.
     * An exception thrown from onDataAvailable has the side-effect of
     * causing the request to be canceled.
     * @param {nsIRequest} aRequest - Request corresponding to the source of the data.
     * @param {nsIInputStream} aInputStream - Input stream containing the data chunk.
     * @param {number} aOffset - Number of bytes that were sent in previous onDataAvailable calls
     * for this request. In other words, the sum of all previous count parameters.
     * @param {number} aCount - ACount number of bytes available in the stream.
     */
    onDataAvailable(aRequest: nsIRequest, aInputStream: nsIInputStream, aOffset: number, aCount: number): void;
}