import {nsIMsgFolder} from './nsIMsgFolder';
import {nsISupports} from './nsISupports';

/**
 * nsIMsgDBHdr
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgHdr.idl
 */
export interface nsIMsgDBHdr extends nsISupports {

    /**
     * @param {string} propertyName
     * @returns {string}
     */
    getStringProperty(propertyName: string): string;

    /**
     * @param {string} propertyName
     * @param {string} propertyValue
     */
    setStringProperty(propertyName: string, propertyValue: string): void;

    /**
     * @param {string} propertyName
     * @returns {number}
     */
    getUint32Property(propertyName: string): number;

    /**
     * @param {string} propertyName
     * @param {number} propertyVal
     */
    setUint32Property(propertyName: string, propertyVal: number): void;

    /**
     * @member {boolean}
     */
    readonly isRead: boolean;

    /**
     * @member {boolean}
     */
    readonly isFlagged: boolean;

    /**
     * Special accessor that checks if a message is part of an ignored subthread.
     * @member {boolean}
     */
    readonly isKilled: boolean;

    /**
     * @param {boolean} read
     */
    markRead(read: boolean): void;

    /**
     * @param {boolean} flagged
     */
    markFlagged(flagged: boolean): void;

    /**
     * @param {boolean} hasAttachments
     */
    markHasAttachments(hasAttachments: boolean): void;

    /**
     * @member {number}
     * @see nsMsgPriority
     */
    priority: number;

    /**
     * @member {number}
     */
    flags: number;

    /**
     * @param {number} flags
     * @returns {number}
     */
    orFlags(flags: number): number;

    /**
     * @param {number} flags
     * @returns {number}
     */
    andFlags(flags: number): number;

    threadId: number;
    messageKey: number;
    threadParent: number;

    /**
     * @member {number}
     */
    readonly dateInSeconds: number;

    /**
     * @member {nsIMsgFolder}
     */
    readonly folder: nsIMsgFolder;

    /**
     * @member {string}
     */
    readonly mime2DecodedAuthor: string;

    /**
     * @member {string}
     */
    readonly mime2DecodedSubject: string;

    /**
     * @member {string}
     */
    readonly mime2DecodedRecipients: string;
}