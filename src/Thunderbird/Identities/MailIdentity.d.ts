/**
 * MailIdentity
 * @see https://webextension-api.thunderbird.net/en/115/identities.html#identities-mailidentity
 */
export interface MailIdentity {

    /**
     * accountId
     * The id of the MailAccount this identity belongs to. The accountId property is read-only.
     */
    accountId?: string;

    /**
     * composeHtml
     *  [Added in TB 85, backported to TB 78.7.0] If the identity uses HTML as the default compose format.
     */
    composeHtml?: boolean;

    /**
     * email
     * The user’s email address as used when messages are sent from this identity.
     */
    email?: string;

    /**
     * id
     * A unique identifier for this identity. The id property is read-only.
     */
    id?: string;

    /**
     * label
     * A user-defined label for this identity.
     */
    label?: string;

    /**
     * name
     * The user’s name as used when messages are sent from this identity.
     */
    name?: string;

    /**
     * organization
     * The organization associated with this identity.
     */
    organization?: string;

    /**
     * replyTo
     * The reply-to email address associated with this identity.
     */
    replyTo?: string;

    /**
     * signature
     * [Added in TB 91] The signature of the identity.
     */
    signature?: string;

    /**
     * signatureIsPlainText
     *  [Added in TB 91] If the signature should be interpreted as plain text or as HTML.
     */
    signatureIsPlainText?: boolean;
}