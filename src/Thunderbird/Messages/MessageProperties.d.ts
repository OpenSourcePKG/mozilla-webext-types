/**
 * Message properties used in update(messageId, newProperties) and import(file, destination,
 * [properties]). They can also be monitored by onUpdated.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messages-messageproperties
 */
export declare interface MessageProperties {

    /**
     * Whether the message is flagged (a.k.a starred).
     * @member {boolean}
     */
    flagged?: boolean;

    /**
     * Whether the message is marked as junk. Only supported in update(messageId, newProperties).
     * @member {boolean}
     */
    junk?: boolean;

    /**
     * Whether the message is marked as new. Only supported in import(file, destination, [properties]).
     * @member {boolean}
     */
    new?: boolean;

    /**
     * Whether the message is marked as read.
     * @member {boolean}
     */
    read?: boolean;

    /**
     * Tags associated with this message. For a list of available tags, call the listTags method.
     * @member {string[]}
     */
    tags?: string[];
}