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
}