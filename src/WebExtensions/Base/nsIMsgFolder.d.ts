import {nsIMsgDBHdr} from './nsIMsgDBHdr';
import {nsIMsgIncomingServer} from './nsIMsgIncomingServer';
import {nsISimpleEnumerator} from './nsISimpleEnumerator';
import {nsMsgFolderFlags} from './nsMsgFolderFlags';

/**
 * nsIMsgFolder
 */
export interface nsIMsgFolder {

    /**
     * name
     */
    name: string;

    /**
     * server
     */
    readonly server: nsIMsgIncomingServer;

    /**
     * URI
     */
    readonly URI: string;

    /**
     * booelan
     */
    readonly hasSubFolders: boolean;

    /**
     * subFolders
     */
    readonly subFolders: nsISimpleEnumerator<nsIMsgFolder>;

    /**
     * getFlag
     * @param getFlag
     */
    getFlag(flagName: nsMsgFolderFlags): boolean;

    /**
     * getUriForMsg
     * @param msgHdr
     */
    getUriForMsg(msgHdr: nsIMsgDBHdr): string;
}