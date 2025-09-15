import {nsISupports} from './nsISupports.js';
import {nsITransportSecurityInfo} from './nsITransportSecurityInfo.js';
import {nsIURI} from './nsIURI.js';

/**
 * Implement this interface to subscribe to errors and warnings passed out via
 * nsIMsgMailSession.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgUserFeedbackListener.idl
 */
export interface nsIMsgUserFeedbackListener extends nsISupports {

    /**
     * Called when an alert from a protocol level implementation is generated.
     * @param {string} aMessage - The localized message string to alert.
     * @param {nsIURI} aUri - The URI relevant to the operation which caused the alert to be generated.
     * @param {boolean} aSilent - If true, this method will notify listeners (so they can e.g. store the alert in the activity manager) but will not result in a visible alert to the user. This can be needed for background operations where we don't want to notify the user in the same way as "normal" operations.
     * @return {boolean} True if the alert was serviced and it does not need to be prompted to the user separately.
     */
    onAlert(aMessage: string, aUri: nsIURI, aSilent: boolean): boolean;

    /**
     * Call to inform the listeners of a certificate error. The listener should
     * alert the user about the error and (if appropriate) allow the user to add
     * a certificate override.
     * @param {nsITransportSecurityInfo} securityInfo - The security information about the operation.
     * @param {nsIURI} url - URI which is relevant to the operation.
     */
    onCertError(securityInfo: nsITransportSecurityInfo, url: nsIURI): void;

}