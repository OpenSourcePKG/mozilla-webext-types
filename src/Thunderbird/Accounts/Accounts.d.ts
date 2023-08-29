import {MailIdentity} from '../Identities/MailIdentity';
import {TEvent} from '../TEvent';
import {MailAccount} from './MailAccount';

/**
 * The accounts API first appeared in Thunderbird 66.
 *
 * Permissions:
 * 'accountsRead' See your mail accounts, their identities and their folders.
 *
 * The permission accountsRead is required to use messenger.accounts.*.
 * @see https://webextension-api.thunderbird.net/en/115/accounts.html
 */
export interface Accounts {

    /**
     * @param {boolean} includeFolders - [Added in TB 91] Specifies whether the returned MailAccount objects should included their account’s folders. Defaults to true.
     * @returns {Promise<MailAccount[]>} Returns all mail accounts. They will be returned in the same order as used in Thunderbird’s folder pane.
     */
    list(includeFolders?: boolean): Promise<MailAccount[]>;

    /**
     * @param {string} accountId
     * @param {boolean} [includeFolders] - [Added in TB 91] Specifies whether the returned MailAccount object should included the account’s folders. Defaults to true.
     * @returns {Promise<MailAccount|null>} Returns details of the requested account, or null if it doesn’t exist.
     */
    get(accountId: string, includeFolders?: boolean): Promise<MailAccount|null>;

    /**
     * [Added in TB 85, backported to TB 78.7.0].
     * @param {boolean} [includeFolders] - [Added in TB 91] Specifies whether the returned MailAccount object should included the account’s folders. Defaults to true.
     * @returns Returns the default account, or null if it is not defined.
     */
    getDefault(includeFolders?: boolean): Promise<MailAccount|null>;

    /**
     * [Added in TB 76].
     * Sets the default identity for an account.
     * @param {string} accountId
     * @param {string} identityId
     */
    setDefaultIdentity(accountId: string, identityId: string): void;

    /**
     * [Added in TB 85, backported to TB 78.7.0].
     * @param {string} accountId
     * @returns {Promise<MailIdentity|null>} Returns the default identity for an account, or null if it is not defined.
     */
    getDefaultIdentity(accountId: string): Promise<MailIdentity|null>;

    /**
     * [Added in TB 98] Fired when a new account has been created.
     */
    onCreated: TEvent<(id: string, account: MailAccount) => void>;

    /**
     * [Added in TB 98] Fired when an account has been removed.
     */
    onDeleted: TEvent<(id: string) => void>;

    /**
     * [Added in TB 98] Fired when a property of an account has been modified.
     * Folders and identities of accounts are not monitored by this event, use the dedicated
     * folder and identity events instead. A changed defaultIdentity is reported only after a different
     * identity has been assigned as default identity, but not after a property of the
     * default identity has been changed.
     */
    onUpdated: TEvent<(id: string, changedValues: {
        defaultIdentity: MailIdentity;
        name: string;
    }) => void>;
}