import {nsIMsgAccount} from './nsIMsgAccount.js';
import {nsISupports} from './nsISupports.js';

/**
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgAccountManager.idl
 */
export interface nsIMsgAccountManager extends nsISupports {

    getUniqueAccountKey(): string;

    /**
     * Return the account with the provided key, or null if none found.
     * @param key
     */
    getAccount(key: string): nsIMsgAccount|null;

}