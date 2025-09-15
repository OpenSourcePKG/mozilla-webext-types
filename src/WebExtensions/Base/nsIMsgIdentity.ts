import {nsISupports} from './nsISupports.js';

/**
 * This interface contains all the personal outgoing mail information
 * for a given person.
 * Each identity is identified by a key, which is the <id> string in
 * the identity preferences, such as in mail.identity.<id>.replyTo.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgIdentity.idl
 * @todo
 */
export interface nsIMsgIdentity extends nsISupports {

    /**
     * Internal preferences ID.
     */
    key: string;

}