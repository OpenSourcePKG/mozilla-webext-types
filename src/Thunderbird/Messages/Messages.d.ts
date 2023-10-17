import {MailFolder} from '../Folders/MailFolder';
import {MessageAttachment} from './MessageAttachment';
import {MessageHeader} from './MessageHeader';
import {MessageList} from './MessageList';
import {MessagePart} from './MessagePart';
import {MessageProperties} from './MessageProperties';
import {TagsDetail} from './TagsDetail';

/**
 * The messages API first appeared in Thunderbird 66.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html
 */
export declare interface Messages {

    /**
     * Gets all messages in a folder.
     * @param {MailFolder} folder
     */
    list(folder: MailFolder): Promise<MessageList>;

    /**
     * Returns the next chunk of messages in a list. See Working with Message Lists for more information.
     * @param {string} messageListId
     * @returns {MessageList}
     */
    continueList(messageListId: string): Promise<MessageList>;

    /**
     * Returns a specified message.
     * @param {number} messageId
     * @returns {MessageHeader}
     */
    get(messageId: number): Promise<MessageHeader>;

    /**
     * Returns a specified message, including all headers and MIME parts.
     * Throws if the message could not be read, for example due to network issues.
     * @param messageId
     * @returns {MessagePart}
     */
    getFull(messageId: number): Promise<MessagePart>;

    /**
     * Returns the unmodified source of a message as a binary string, which is a simple series of 8-bit values.
     * Throws if the message could not be read, for example due to network issues. If the message contains non-ASCII
     * characters, the body parts in the binary string cannot be read directly and must be decoded according to their
     * character sets. Use getFull(messageId) to get the correctly decoded parts. Manually decoding the raw message is
     * probably too error-prone, especially if the message contains MIME parts with different character
     * set encodings or attachments.
     *
     * To get a readable version of the raw message as it appears in Thunderbird’s message source view,
     * it may be sufficient to decode the message according to the character set specified in its main
     * content-type header (example: text/html; charset=UTF-8) using the following function
     * (see MDN for supported input encodings):
     * see https://webextension-api.thunderbird.net/en/115/messages.html#getraw-messageid.
     * @param {number} messageId
     * @param {object} options
     * @returns {string}
     * @see https://searchfox.org/comm-esr115/rev/d32fefb23a6afce4c7f71af10978fa1c3064edf1/mail/components/extensions/parent/ext-messages.js#757
     */
    getRaw(messageId: number, options?: {
        data_format: string;
    }): Promise<string|File>;

    /**
     * Lists the attachments of a message.
     * @param {number} messageId
     * @returns {MessageAttachment[]}
     */
    listAttachments(messageId: number): Promise<MessageAttachment[]>;

    /**
     * Gets the content of a MessageAttachment as a File object.
     * @param {number} messageId
     * @param {string} partName
     * @returns {File}
     */
    getAttachmentFile(messageId: number, partName: string): Promise<File>;

    /**
     * Opens the specified attachment.
     * @param {number} messageId
     * @param {string} partName
     * @param {number} tabId
     */
    openAttachment(messageId: number, partName: string, tabId: number): void;

    /**
     * Gets all messages that have the specified properties, or all messages if no properties are specified.
     * @param {object} queryInfo
     * @returns {MessageList}
     */
    query(queryInfo?: {

        /**
         * If specified, returns only messages with or without attachments.
         * @member {boolean}
         */
        attachment?: boolean;

        /**
         * Returns only messages with this value matching the author. The search value is a single email address, a
         * name or a combination (e.g.: Name <user@domain.org>). The address part of the search value (if provided)
         * must match the author’s address completely. The name part of the search value (if provided) must match the
         * author’s name partially. All matches are done case-insensitive.
         * @member {string}
         */
        author?: string;

        /**
         * Returns only messages with this value in the body of the mail.
         * @member {string}
         */
        body?: string;

        /**
         * Returns only flagged (or unflagged if false) messages.
         * @member {string}
         */
        flagged?: string;

        /**
         * Returns only messages from the specified folder. The accountsRead permission is required.
         * @member {MailFolder}
         */
        folder?: MailFolder;

        /**
         * Returns only messages with a date after this value.
         * @member {Date}
         */
        fromDate?: Date;

        /**
         * Returns only messages with the author’s address matching any configured identity.
         * @member {boolean}
         */
        fromMe?: boolean;

        /**
         * Returns only messages with this value somewhere in the mail (subject, body or author).
         * @member {string}
         */
        fullText?: string;

        /**
         * Returns only messages with a Message-ID header matching this value.
         * @member {string}
         */
        headerMessageId?: string;

        /**
         * Search the folder specified by queryInfo.folder recursively.
         * @member {boolean}
         */
        includeSubFolders?: boolean;

        /**
         * Returns only messages whose recipients match all specified addresses. The search value is a
         * semicolon separated list of email addresses, names or combinations (e.g.: Name <user@domain.org>).
         * For a match, all specified addresses must equal a recipient’s address completely and all specified names
         * must match a recipient’s name partially. All matches are done case-insensitive.
         * @member {string}
         */
        recipients?: string;

        /**
         * Returns only messages with this value matching the subject.
         * @member {string}
         */
        subject?: string;

        /**
         * Returns only messages with the specified tags. For a list of available tags, call the listTags() method.
         * @member {TagsDetail}
         */
        tags?: TagsDetail;

        /**
         * Returns only messages with a date before this value.
         * @member {Date}
         */
        toDate?: Date;

        /**
         * Returns only messages with at least one recipient address matching any configured identity.
         * @member {boolean}
         */
        toMe?: boolean;

        /**
         * Returns only unread (or read if false) messages.
         * @member {boolean}
         */
        unread?: boolean;

    }): Promise<MessageList>;

    /**
     * Marks or unmarks a message as junk, read, flagged, or tagged. Updating external messages will throw an ExtensionError.
     * @param {number} messageId
     * @param {MessageProperties} newProperties
     */
    update(messageId: number, newProperties: MessageProperties): void;

    /**
     * Moves messages to a specified folder. If the messages cannot be removed from the source folder,
     * they will be copied instead of moved. Moving external messages will throw an ExtensionError.
     * @param {number[]} messageId - The IDs of the messages to move.
     * @param {MailFolder} destination - The folder to move the messages to.
     */
    move(messageId: number[], destination: MailFolder): void;

    /**
     * Copies messages to a specified folder.
     * @param {number[]} messageId - The IDs of the messages to copy.
     * @param {MailFolder} destination - The folder to copy the messages to.
     */
    copy(messageId: number[], destination: MailFolder): void;

    /**
     * Deletes messages permanently, or moves them to the trash folder (honoring the account’s deletion behavior
     * settings). Deleting external messages will throw an ExtensionError. The skipTrash parameter allows immediate
     * permanent deletion, bypassing the trash folder.
     * @param {number[]} messageId - The IDs of the messages to delete.
     * @param {boolean} skipTrash - If true, the message will be deleted permanently,
     * regardless of the account’s deletion behavior settings.
     */
    delete(messageId: number[], skipTrash?: boolean): void;

    // TODO
}