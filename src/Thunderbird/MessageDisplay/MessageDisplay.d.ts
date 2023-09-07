import {MessageHeader} from '../Messages/MessageHeader';
import {Tab} from '../Tabs/Tab';
import {TEvent} from '../TEvent';

/**
 * MessageDisplay
 * The message display API first appeared in Thunderbird 68.
 *
 * A message can be displayed in either a 3-pane tab, a tab of its own, or in a window of its own.
 * All are referenced by tabId in this API. Display windows are considered to have exactly one tab,
 * which has limited functionality compared to tabs from the main window.
 *
 * Note:
 * The permission messagesRead is required to use messenger.messageDisplay.*.
 * @see https://webextension-api.thunderbird.net/en/115/messageDisplay.html
 */
export interface MessageDisplay {

    /**
     * [Added in TB 81, backported to TB 78.4.0] Gets the currently displayed message in the specified tab
     * (even if the tab itself is currently not visible). It returns null if no messages are displayed,
     * or if multiple messages are displayed.
     * @param {number} tabId
     */
    getDisplayedMessage(tabId: number): Promise<MessageHeader|null>;

    /**
     * [Added in TB 102] Opens a message in a new tab or in a new window.
     * @param {} openProperties
     */
    open(

        /**
         * Settings for opening the message. Exactly one of messageId, headerMessageId or file must be specified.
         */
        openProperties: {

            /**
             * Whether the new tab should become the active tab in the window. Only applicable to messages opened in tabs.
             * @member {[boolean]}
             */
            active?: boolean;

            /**
             * The DOM file object of a message to be opened.
             */
            file?: File;

            /**
             * The headerMessageId of a message to be opened. Will throw an ExtensionError, if the provided
             * headerMessageId is unknown or invalid. Not supported for external messages.
             */
            headerMessageId?: string;

            /**
             * Where to open the message. If not specified, the users preference is honoured.
             */
            location?: 'tab' | 'window';

            /**
             * The id of a message to be opened. Will throw an ExtensionError, if the provided messageId is unknown or invalid.
             */
            messageId?: number;

            /**
             * The id of the window, where the new tab should be created. Defaults to the current window. Only applicable to messages opened in tabs.
             */
            windowId?: number;

        }): Promise<Tab>;

    /**
     * Fired when a message is displayed, whether in a 3-pane tab, a message tab, or a message window.
     * @param {Tab} tab - Changes in TB 76: previously just the tab’s ID.
     * @param {MessageHeader} message - A Message.
     */
    onMessageDisplayed: TEvent<(
        tab: Tab,
        message: MessageHeader
    ) => void>;

    /**
     * Fired when either a single message is displayed or when multiple messages are displayed,
     * whether in a 3-pane tab, a message tab, or a message window.
     */
    onMessagesDisplayed: TEvent<(tab: Tab, messages: MessageHeader[]) => void>;

}