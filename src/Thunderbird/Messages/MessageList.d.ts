import {MessageHeader} from './MessageHeader';

/**
 * See Working with Message Lists for more information.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messages-messagelist
 */
export declare interface MessageList {

    /**
     * @member {MessageHeader[]}
     */
    messages: MessageHeader[];

    /**
     * @member {string}
     */
    id?: string;

}