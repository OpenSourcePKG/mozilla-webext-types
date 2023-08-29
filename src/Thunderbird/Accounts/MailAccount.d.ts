import {MailFolder} from '../Folders/MailFolder';
import {MailIdentity} from '../Identities/MailIdentity';

/**
 * An object describing a mail account, as returned for example by the list([includeFolders]) and
 * get(accountId, [includeFolders]) methods. The folders property is only included if requested.
 * @see https://webextension-api.thunderbird.net/en/115/accounts.html#mailaccount
 */
export interface MailAccount {

    /**
     * A unique identifier for this account.
     * @member {string}
     */
    id: string;

    /**
     * [Added in TB 76] The identities associated with this account. The default identity is listed first,
     * others in no particular order.
     * @member {MailIdentity[]}
     */
    identities: MailIdentity[];

    /**
     * The human-friendly name of this account.
     * @member {string}
     */
    name: string;

    /**
     * What sort of account this is, e.g. Imap, nntp, or pop3.
     * @member {string}
     */
    type: 'imap' | 'nntp' | 'pop3';

    /**
     * The folders for this account are only included if requested.
     * @member {MailFolder[]}
     */
    folders?: MailFolder[];
}