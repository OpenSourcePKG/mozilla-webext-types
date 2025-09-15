import {nsIMsgIdentity} from './nsIMsgIdentity.js';
import {nsIMsgIncomingServer} from './nsIMsgIncomingServer.js';
import {nsISupports} from './nsISupports.js';

/**
 * An account consists of an incoming server and one or more
 * outgoing identities. An account is identified by a key,
 * which is the <account> string in the account preferences,
 * such as in mail.account.<account>.identities.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgAccount.idl
 */
export interface nsIMsgAccount extends nsISupports {

    // Internal key identifying itself
    key: string;

    // Incoming server stuff
    incomingServer: nsIMsgIncomingServer;

    // Outgoing identity list (array of nsIMsgIdentity's)
    identities: nsIMsgIdentity[];


}