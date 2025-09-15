import {nsIMsgAccountManager} from './Base/nsIMsgAccountManager.js';
import {nsIMsgCopyService} from './Base/nsIMsgCopyService';
import {nsIMsgMailSession} from './Base/nsIMsgMailSession.js';
import {nsIMsgMessageService} from './Base/nsIMsgMessageService';

/**
 * @see https://searchfox.org/comm-central/source/mailnews/base/src/MailServices.jsm
 * @see https://searchfox.org/comm-central/source/mailnews/base/src/MailServices.sys.mjs
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
     * Get the necko URL for the given message URI.
     * @param {string} messageURI - The URI of a message.
     * @returns {string}
     */
    neckoURLForMessageURI(messageURI: string): string;

    mailSession: nsIMsgMailSession;

    accounts: nsIMsgAccountManager;

    /**
     * @member {nsIMsgCopyService}
     */
    copy: nsIMsgCopyService;

    // TODO
}