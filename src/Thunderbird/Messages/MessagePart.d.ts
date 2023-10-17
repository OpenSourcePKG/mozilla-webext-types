/**
 * Represents an email message “part”, which could be the whole message.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messages-messagepart
 */
export declare interface MessagePart {

    /**
     * The content of the part.
     * @member {string}
     */
    body?: string;

    /**
     * @member {string}
     */
    contentType?: string;

    /**
     * A dictionary object of part headers as key-value pairs, with the header name as key, and an array of headers as value.
     * @member {object}
     */
    headers?: {[key: string]: any;};

    /**
     * Name of the part, if it is a file.
     * @member {string}
     */
    name?: string;

    /**
     * The identifier of this part, used in getAttachmentFile(messageId, partName).
     * @member {string}
     */
    partName?: string;

    /**
     * Any sub-parts of this part.
     * @member {MessagePart[]}
     */
    parts?: MessagePart[];

    /**
     * The size of this part. The size of message/* parts is not the actual message size (on disc),
     * but the total size of its decoded body parts, excluding headers.
     * @member {number}
     */
    size?: number;
}