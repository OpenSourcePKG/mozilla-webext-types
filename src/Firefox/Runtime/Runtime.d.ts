import {TEvent} from '../../Thunderbird/TEvent';
import {MessageSender} from './MessageSender';
import {RuntimeSendMessageOptions} from './RuntimeSendMessageOptions';

/**
 * This module provides information about your extension and the environment it's running in.
 *
 * It also provides messaging APIs enabling you to:
 *
 * - Communicate between different parts of your extension. For advice on choosing between the messaging options, see
 * Choosing between one-off messages and connection-based messaging.
 * - Communicate with other extensions.
 * - Communicate with native applications.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime
 */
export interface Runtime {

    /**
     * Retrieves the Window object for the background page running inside the current extension.
     * If the background page is non-persistent (an event page) and it is not running, the background page is started.
     * @returns {Window}
     */
    getBackgroundPage(): Promise<Window|null>;

    /**
     * Sends a single message to event listeners within your extension or a different extension.
     * @param {any} message
     * @param {RuntimeSendMessageOptions} options
     */
    sendMessage(message: any, options?: RuntimeSendMessageOptions): Promise<any>;

    /**
     * Sends a single message to event listeners within your extension or a different extension.
     *
     * If sending to your extension, omit the extensionId argument. The runtime.onMessage event will be
     * fired in each page in your extension, except for the frame that called runtime.sendMessage.
     * @param {string} extensionId
     * @param {any} message
     * @param {RuntimeSendMessageOptions} options
     */
    sendMessage(extensionId: string, message: any, options?: RuntimeSendMessageOptions): Promise<any>;

    /**
     * Use this event to listen for messages from another part of your extension.
     * Some example use cases are.:
     * in a content script, to listen for messages from a background script.
     * in a background script, to listen for messages from a content script.
     * in an option page or popup script, to listen for messages from a background script.
     * in a background script, to listen for messages from an option page or popup script.
     * To send a message that is received by the onMessage() listener, use runtime.sendMessage() or
     * (to send a message to a content script) tabs.sendMessage().
     */
    onMessage: TEvent<(

        /**
         * The message itself. This is a serializable object (see Data cloning algorithm).
         * @member {object}
         */
        message: object,

        /**
         * A runtime.MessageSender object representing the sender of the message.
         * @member {MessageSender}
         */
        sender: MessageSender

    ) => void>;
}