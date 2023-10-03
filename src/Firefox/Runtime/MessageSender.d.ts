import {Tab} from '../Tabs/Tab';

/**
 * An object containing information about the sender of a message or connection request; this is
 * passed to the runtime.onMessage() listener.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
 */
export interface MessageSender {

    /**
     * The tabs.Tab which opened the connection. This property will only be present when the connection was
     * opened from a tab (including content scripts).
     * @member {[Tab]}
     */
    tab?: Tab;

    /**
     * The frame that opened the connection. Zero for top-level frames, positive for child frames.
     * This will only be set when the tab is set.
     * @member {[number]}
     */
    frameId?: number;

    /**
     * The ID of the extension that sent the message if the message was sent by an extension. If the sender set an
     * ID explicitly using the browser_specific_settings key in manifest.json, then id will have this value.
     * Otherwise, it will have the ID that was generated for the sender.
     * @member {[string]}
     */
    id?: string;

    /**
     * The URL of the page or frame hosting the script that sent the message.
     *
     * If the sender is a script running in an extension page (such as a background page, an options page, or a
     * browser action or page action popup), the URL will be in the form
     * "moz-extension://<extension-internal-id>/path/to/page.html". If the sender is a background script and you
     * haven't included a background page, it will be
     * "moz-extension://<extension-internal-id>/_generated_background_page.html".
     *
     * >If the sender is a script running in a web page (including content scripts as well as normal page scripts),
     * then url will be the web page URL. If the script is running in an iframe, url will be the iframe's URL.
     * @member {[string]}
     */
    url?: string;

    /**
     * The TLS channel ID of the page or frame that opened the connection, if requested by the extension, and if available.
     * @member {[string]}
     */
    tlsChannelId?: string;

}