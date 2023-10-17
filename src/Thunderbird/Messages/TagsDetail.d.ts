/**
 * Used for filtering messages by tag in various methods. Note that functions using this type may have a partial implementation.
 * @see https://webextension-api.thunderbird.net/en/115/messages.html#messages-tagsdetail
 */
export declare interface TagsDetail {

    /**
     * Whether all of the tag filters must apply, or any of them.
     *
     * Supported values:
     * - all
     * - any.
     * @member {string}
     */
    mode: string;

    /**
     * A dictionary object with one or more filter condition as key-value pairs, the key being the tag to filter on,
     * and the value being a boolean expression, requesting whether a message must include (true) or exclude (false)
     * the tag. For a list of available tags, call the listTags() method.
     * @member {object}
     */
    tags: object;
}