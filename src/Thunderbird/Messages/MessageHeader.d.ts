import {MailFolder} from '../Folders/MailFolder';

/**
 * MessageHeader
 * Basic information about a message.
 *
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messageheader
 */
export interface MessageHeader {

    /**
     * author
     */
    author: string;

    /**
     * The Bcc recipients. Not populated for news/nntp messages.
     */
    bccList: string[];

    /**
     * The Cc recipients. Not populated for news/nntp messages.
     */
    ccList: string[];

    /**
     * date
     */
    date: Date;

    /**
     * external
     * [Added in TB 106] Whether this message is a real message or an external message (opened from a file or from an attachment).
     */
    external: boolean;

    /**
     * flagged
     * Whether this message is flagged (a.k.a. starred).
     */
    flagged: boolean;

    /**
     * headerMessageId
     * [Added in TB 85] The message-id header of the message.
     */
    headerMessageId: string;

    /**
     * headersOnly
     * [Added in TB 102] Some account types (for example pop3) allow to download only the headers of the message,
     * but not its body. The body of such messages will not be available.
     */
    headersOnly: boolean;

    /**
     * id
     */
    id: number;

    /**
     * junk
     * [Added in TB 74] Whether the message has been marked as junk. Always false for news/nntp messages and external messages.
     */
    junk: boolean;

    /**
     * junkScore
     * [Added in TB 74] The junk score associated with the message. Always 0 for news/nntp messages and external messages.
     */
    junkScore: number;

    /**
     * new
     * [Added in TB 106] Whether the message has been received recently and is marked as new.
     */
    new: boolean;

    /**
     * recipients
     * The To recipients. Not populated for news/nntp messages.
     */
    recipients: string[];

    /**
     * size
     * [Added in TB 90] The total size of the message in bytes.
     */
    size: number;

    /**
     * subject
     * The subject of the message.
     */
    subject: string;

    /**
     * tags
     * Tags associated with this message. For a list of available tags, call the listTags method.
     */
    tags: string[];

    /**
     * folder
     * The accountsRead permission is required for this property to be included.
     * Not available for external or attached messages.
     */
    folder?: MailFolder;

    /**
     * read
     * Whether the message has been marked as read. Not available for external or attached messages.
     */
    read?: boolean;
}