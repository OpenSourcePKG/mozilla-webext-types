import {nsIMsgFolder} from './nsIMsgFolder';

/**
 * nsIMsgDBHdr
 */
export interface nsIMsgDBHdr {

    /**
     * folder
     */
    readonly folder: nsIMsgFolder;

    /**
     * mime2DecodedAuthor
     */
    readonly mime2DecodedAuthor: string;

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