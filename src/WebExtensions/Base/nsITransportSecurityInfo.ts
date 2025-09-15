import {nsISupports} from './nsISupports.js';

/**
 * TODO
 * @see https://searchfox.org/comm-central/source/mozilla/security/manager/ssl/nsITransportSecurityInfo.idl
 */
export interface nsITransportSecurityInfo extends nsISupports {

    securityState: number;
    errorCode: number;
    errorCodeString: string;

}