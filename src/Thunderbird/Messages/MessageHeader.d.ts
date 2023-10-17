import {MailFolder} from '../Folders/MailFolder';

/**
 * Basic information about a message.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messageheader
 */
export interface MessageHeader {

    /**
     * @member {string}
     */
    author: string;

    /**
     * The Bcc recipients. Not populated for news/nntp messages.
     * @member {string[]}
     */
    bccList: string[];

    /**
     * The Cc recipients. Not populated for news/nntp messages.
     * @member {string[]}
     */
    ccList: string[];

    /**
     * @member {Date}
     */
    date: Date;

    /**
     * [Added in TB 106] Whether this message is a real message or an external message (opened from a file or from an attachment).
     * @member {boolean}
     */
    external: boolean;

    /**
     * Whether this message is flagged (a.k.a. Starred).
     * @member {boolean}
     */
    flagged: boolean;

    /**
     * [Added in TB 85] The message-id header of the message.
     * @member {string}
     */
    headerMessageId: string;

    /**
     * [Added in TB 102] Some account types (for example pop3) allow to download only the headers of the message,
     * but not its body. The body of such messages will not be available.
     * @member {boolean}
     */
    headersOnly: boolean;

    /**
     * @member {number}
     */
    id: number;

    /**
     * [Added in TB 74] Whether the message has been marked as junk. Always false for news/nntp messages and external messages.
     * @member {boolean}
     */
    junk: boolean;

    /**
     * [Added in TB 74] The junk score associated with the message. Always 0 for news/nntp messages and external messages.
     * @member {number}
     */
    junkScore: number;

    /**
     * [Added in TB 106] Whether the message has been received recently and is marked as new.
     * @member {boolean}
     */
    new: boolean;

    /**
     * The To recipients. Not populated for news/nntp messages.
     * @member {string[]}
     */
    recipients: string[];

    /**
     * [Added in TB 90] The total size of the message in bytes.
     * @member {number}
     */
    size: number;

    /**
     * The subject of the message.
     * @member {string}
     */
    subject: string;

    /**
     * Tags associated with this message. For a list of available tags, call the listTags method.
     * @member {string[]}
     */
    tags: string[];

    /**
     * The accountsRead permission is required for this property to be included.
     * Not available for external or attached messages.
     * @member {MailFolder}
     */
    folder?: MailFolder;

    /**
     * Whether the message has been marked as read. Not available for external or attached messages.
     * @member {boolean}
     */
    read?: boolean;

}