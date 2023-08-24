import {MailFolder} from '../Folders/MailFolder';
import {MailIdentity} from '../Identities/MailIdentity';

/**
 * MailAccount
 * An object describing a mail account, as returned for example by the list([includeFolders]) and
 * get(accountId, [includeFolders]) methods. The folders property is only included if requested.
 *
 * @see https://webextension-api.thunderbird.net/en/115/accounts.html#mailaccount
 */
export interface MailAccount {

    /**
     * id
     * A unique identifier for this account.
     */
    id: string;

    /**
     * identities
     * [Added in TB 76] The identities associated with this account. The default identity is listed first,
     * others in no particular order.
     */
    identities: MailIdentity[];

    /**
     * name
     * The human-friendly name of this account.
     */
    name: string;

    /**
     * type
     * What sort of account this is, e.g. imap, nntp, or pop3.
     */
    type: 'imap' | 'nntp' | 'pop3';

    /**
     * folders
     * The folders for this account are only included if requested.
     */
    folders?: MailFolder[];
}