/**
 * Runtime send message options.
 */
export interface RuntimeSendMessageOptions {

    /**
     * Whether the TLS channel ID will be passed into runtime.onMessageExternal for processes that are
     * listening for the connection event.
     * This option is only supported in Chromium-based browsers.
     */
    includeTlsChannelId: boolean;
}