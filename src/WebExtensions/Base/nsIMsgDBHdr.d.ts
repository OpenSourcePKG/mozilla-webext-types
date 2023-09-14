import {nsIMsgFolder} from './nsIMsgFolder';

/**
 * nsIMsgDBHdr
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgHdr.idl
 */
export interface nsIMsgDBHdr {

    /**
     * @member {number}
     */
    flags: number;

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