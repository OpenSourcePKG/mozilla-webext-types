import {MessageHeader} from './MessageHeader';

/**
 * Represents an attachment in a message.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messages-messageattachment
 */
export declare interface MessageAttachment {

    /**
     * The content type of the attachment.
     * @member {string}
     */
    contentType: string;

    /**
     * The name, as displayed to the user, of this attachment. This is usually but not always the filename of the attached file.
     * @member {string}
     */
    name: string;

    /**
     * Identifies the MIME part of the message associated with this attachment.
     * @member {string}
     */
    partName: string;

    /**
     * The size in bytes of this attachment.
     * @member {number}
     */
    size: number;

    /**
     * A MessageHeader, if this attachment is a message.
     * @member {MessageHeader}
     */
    message?: MessageHeader;
}