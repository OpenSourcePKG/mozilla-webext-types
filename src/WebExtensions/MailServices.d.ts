import {Interfaces} from './Base/Interfaces';

/**
 * @see https://searchfox.org/comm-central/source/mailnews/base/src/MailServices.jsm
 */
export declare interface MailServices {

    /**
     * Gets the `nsIMsgMessageService` for a given message URI. This should have the same behaviour as
     * `GetMessageServiceFromURI` (nsMsgUtils.cpp).
     * @param {string} uri - The URI of a folder or message.
     * @returns {nsIMsgMessageService}
     */
    messageServiceFromURI<I extends Interfaces[keyof Interfaces]>(uri: string): I;
}