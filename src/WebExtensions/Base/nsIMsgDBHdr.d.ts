import {nsIMsgFolder} from './nsIMsgFolder';
import {nsISupports} from './nsISupports';

/**
 * nsIMsgDBHdr
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgHdr.idl
 */
export interface nsIMsgDBHdr extends nsISupports {

    /**
     * @member {number}
     */
    flags: number;

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
     * getStringProperty
     * @param propertyName
     */
    getStringProperty(propertyName: string): string;

    /**
     * setStringProperty
     * @param propertyName
     * @param propertyValue
     */
    setStringProperty(propertyName: string, propertyValue: string): void;
}