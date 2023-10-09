import {nsISupports} from './nsISupports';

/**
 * An interface describing a readable stream of data.  An input stream may be
 * "blocking" or "non-blocking" (see the IsNonBlocking method).  A blocking
 * input stream may suspend the calling thread in order to satisfy a call to
 * Close, Available, Read, or ReadSegments.  A non-blocking input stream, on
 * the other hand, must not block the calling thread of execution.
 *
 * NOTE: blocking input streams are often read on a background thread to avoid
 * locking up the main application thread.  For this reason, it is generally
 * the case that a blocking input stream should be implemented using thread-
 * safe AddRef and Release.
 * @see https://searchfox.org/mozilla-central/source/xpcom/io/nsIInputStream.idl
 */
export declare interface nsIInputStream extends nsISupports {

    /**
     * Close the stream. This method causes subsequent calls to Read and
     * ReadSegments to return 0 bytes read to indicate end-of-file.  Any
     * subsequent calls to Available or StreamStatus should throw
     * NS_BASE_STREAM_CLOSED.
     * Succeeds (without side effects) if already closed.
     */
    close(): void;

    /**
     * Determine number of bytes available in the stream.  A non-blocking
     * stream that does not yet have any data to read should return 0 bytes
     * from this method (i.e., it must not throw the NS_BASE_STREAM_WOULD_BLOCK
     * exception).
     *
     * In addition to the number of bytes available in the stream, this method
     * also informs the caller of the current status of the stream.  A stream
     * that is closed will throw an exception when this method is called.  That
     * enables the caller to know the condition of the stream before attempting
     * to read from it.  If a stream is at end-of-file, but not closed, then
     * this method returns 0 bytes available.  (Note: some nsIInputStream
     * implementations automatically close when eof is reached; some do not).
     *
     * NOTE: Streams implementing nsIAsyncInputStream must automatically close
     * when eof is reached, as otherwise it is impossible to distinguish between
     * a stream waiting for more data and a stream at EOF using Available().
     * @returns {number} Of bytes currently available in the stream.
     * @throws NS_BASE_STREAM_CLOSED if the stream is closed normally.
     * @throws <other-error> if the stream is closed due to some error condition.
     */
    available(): number;

    /**
     * Check the current status of the stream.  A stream that is closed will
     * throw an exception when this method is called.  That enables the caller
     * to know the condition of the stream before attempting to read from it.
     *
     * This method will not throw NS_BASE_STREAM_WOULD_BLOCK, even if the stream
     * is an non-blocking stream with no data. A non-blocking stream that does
     * not yet have any data to read should return NS_OK.
     *
     * NOTE: Unlike available, his method should not block the calling thread
     * (e.g. To query the state of a file descriptor), even when called on a
     * blocking stream.
     * @throws NS_BASE_STREAM_CLOSED if the stream closed normally.
     * @throws <other-error> if the stream closed with a different status.
     */
    streamStatus(): void;

    /**
     * @returns {boolean} True if stream is non-blocking
     * NOTE: reading from a blocking input stream will block the calling thread
     * until at least one byte of data can be extracted from the stream.
     * NOTE: a non-blocking input stream may implement nsIAsyncInputStream to
     * provide consumers with a way to wait for the stream to have more data
     * once its read method is unable to return any data without blocking.
     */
    isNonBlocking(): boolean;
}