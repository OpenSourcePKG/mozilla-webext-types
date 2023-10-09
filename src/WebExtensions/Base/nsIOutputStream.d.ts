import {nsIInputStream} from './nsIInputStream';
import {nsISupports} from './nsISupports';

/**
 * An interface describing a writable stream of data.  An output stream may be
 * "blocking" or "non-blocking" (see the IsNonBlocking method).  A blocking
 * output stream may suspend the calling thread in order to satisfy a call to
 * Close, Flush, Write, WriteFrom, or WriteSegments.  A non-blocking output
 * stream, on the other hand, must not block the calling thread of execution.
 * NOTE: blocking output streams are often written to on a background thread to
 * avoid locking up the main application thread.  For this reason, it is
 * generally the case that a blocking output stream should be implemented using
 * thread- safe AddRef and Release.
 * @see https://searchfox.org/mozilla-central/source/xpcom/io/nsIOutputStream.idl
 */
export declare interface nsIOutputStream extends nsISupports {

    /**
     * Close the stream. Forces the output stream to flush any buffered data.
     * Any subsequent calls to StreamStatus should throw NS_BASE_STREAM_CLOSED.
     * Succeeds without effect if already closed.
     * @throws NS_BASE_STREAM_WOULD_BLOCK if unable to flush without blocking the calling thread (non-blocking mode only).
     */
    close(): void;

    /**
     * Flush the stream.
     * @throws NS_BASE_STREAM_WOULD_BLOCK if unable to flush without blocking the calling thread (non-blocking mode only).
     */
    flush(): void;

    /**
     * Check the current status of the stream.  A stream that is closed will
     * throw an exception when this method is called.  That enables the caller
     * to know the condition of the stream before attempting to write into it.
     * This method will not throw NS_BASE_STREAM_WOULD_BLOCK, even if the stream
     * is a non-blocking stream with no available space. A non-blocking stream
     * which has not been closed, but has no available room should return NS_OK.
     * NOTE: This method should not block the calling thread (e.g. To query the
     * state of a file descriptor), even when called on a blocking stream.
     * @throws NS_BASE_STREAM_CLOSED if the stream closed normally.
     * @throws <other-error> if the stream closed with a different status.
     */
    streamStatus(): void;

    /**
     * Write data into the stream.
     * @param {string} aBuf - The buffer containing the data to be written.
     * @param {number} aCount - The maximum number of bytes to be written.
     * @returns {number} Of bytes written (may be less than aCount).
     * @throws NS_BASE_STREAM_WOULD_BLOCK if writing to the output stream would
     * block the calling thread (non-blocking mode only).
     * @throws <other-error> on failure.
     */
    write(aBuf: string, aCount: number): number;

    /**
     * Writes data into the stream from an input stream.
     * @param {nsIInputStream} aFromStream - The stream containing the data to be written.
     * @param {number} aCount - The maximum number of bytes to be written.
     * @returns {number} Of bytes written (may be less than aCount).
     * @throws NS_BASE_STREAM_WOULD_BLOCK if writing to the output stream would
     * block the calling thread (non-blocking mode only). This failure
     * means no bytes were transferred.
     * @throws <other-error> on failure
     * NOTE: This method is defined by this interface in order to allow the
     * output stream to efficiently copy the data from the input stream into
     * its internal buffer (if any). If this method was provided as an external
     * facility, a separate char* buffer would need to be used in order to call
     * the output stream's other Write method.
     */
    writeFrom(aFromStream: nsIInputStream, aCount: number): number;

    /**
     * @returns {boolean} True if stream is non-blocking
     * NOTE: writing to a blocking output stream will block the calling thread
     * until all given data can be consumed by the stream.
     * NOTE: a non-blocking output stream may implement nsIAsyncOutputStream to
     * provide consumers with a way to wait for the stream to accept more data
     * once its write method is unable to accept any data without blocking.
     */
    isNonBlocking(): boolean;
}