import {nsIMsgCopyService} from './Base/nsIMsgCopyService';
import {nsIMsgMessageService} from './Base/nsIMsgMessageService';

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
    messageServiceFromURI(uri: string): nsIMsgMessageService;

    /**
     * @member {nsIMsgCopyService}
     */
    copy: nsIMsgCopyService;

    // TODO
}