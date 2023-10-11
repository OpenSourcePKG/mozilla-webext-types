import {nsIMsgDBHdr} from './nsIMsgDBHdr';
import {nsIMsgIncomingServer} from './nsIMsgIncomingServer';
import {nsISimpleEnumerator} from './nsISimpleEnumerator';
import {nsISupports} from './nsISupports';
import {nsMsgFolderFlags} from './nsMsgFolderFlags';

/**
 * The contract ID for this component is @mozilla.org/msgFolder/msgFolderService;1.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgFolder.idl
 */
export interface nsIMsgFolder extends nsISupports {

    /**
     * @member {string} name
     */
    name: string;

    /**
     * @member {nsIMsgIncomingServer} server
     */
    readonly server: nsIMsgIncomingServer;

    /**
     * @member {string} URI
     */
    readonly URI: string;

    /**
     * @member {boolean} hasSubFolders
     */
    readonly hasSubFolders: boolean;

    /**
     * @member {nsISimpleEnumerator} subFolders
     */
    readonly subFolders: nsISimpleEnumerator<nsIMsgFolder>;

    /**
     * @param {nsMsgFolderFlags} flagName
     */
    getFlag(flagName: nsMsgFolderFlags): boolean;

    /**
     * Direct access to the set/get all the flags at once.
     * @member {number}
     */
    flags: number;

    /**
     * @param {nsIMsgDBHdr} msgHdr
     */
    getUriForMsg(msgHdr: nsIMsgDBHdr): string;
}