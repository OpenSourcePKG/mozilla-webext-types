export declare interface nsIInputStream {

    /**
     * Close the stream.  This method causes subsequent calls to Read and
     * ReadSegments to return 0 bytes read to indicate end-of-file.  Any
     * subsequent calls to Available or StreamStatus should throw
     * NS_BASE_STREAM_CLOSED.
     * Succeeds (without side effects) if already closed.
     */
    close(): void;
}