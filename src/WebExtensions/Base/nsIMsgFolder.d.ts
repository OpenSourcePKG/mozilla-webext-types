import {nsIMsgDBHdr} from './nsIMsgDBHdr';
import {nsIMsgEnumerator} from './nsIMsgEnumerator';
import {nsIMsgIncomingServer} from './nsIMsgIncomingServer';
import {nsIMsgWindow} from './nsIMsgWindow';
import {nsISimpleEnumerator} from './nsISimpleEnumerator';
import {nsISupports} from './nsISupports';
import {nsMsgFolderFlags} from './nsMsgFolderFlags';

/**
 * The contract ID for this component is @mozilla.org/msgFolder/msgFolderService;1.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgFolder.idl
 */
export interface nsIMsgFolder extends nsISupports {

    /**
     * @member {string}
     */
    readonly URI: string;

    /**
     * @member {string}
     */
    name: string;

    /**
     * @member {string}
     */
    prettyName: string;

    /**
     * @member {string}
     */
    readonly abbreviatedName: string;

    /**
     * Set pretty name again from original name,
     * typically used when locale changes.
     */
    setPrettyNameFromOriginal(): void;

    /**
     * @member {nsIMsgFolder}
     */
    parent: nsIMsgFolder;

    /**
     * Returns an enumerator containing the messages within the current database.
     * @member {nsIMsgEnumerator}
     */
    readonly messages: nsIMsgEnumerator;

    /**
     * This method is called by the folder-lookup-service after constructing
     * a folder to initialize its URI. You would not normally call this method directly.
     * @param {string} uri - The URI of the folder.
     */
    Init(uri: string): void;

    startFolderLoading(): void;
    endFolderLoading(): void;

    /**
     * @param {boolean} aReady
     */
    folderNamesReady(aReady: boolean): void;

    /**
     * Get new headers for db.
     * @param {nsIMsgWindow} aWindow
     */
    updateFolder(aWindow: nsIMsgWindow): void;

    /**
     * URL for this folder.
     * @member {string}
     */
    readonly folderURL: string;

    /**
     * Should probably move to the server.
     * @member {boolean}
     */
    readonly showDeletedMessages: boolean;

    /**
     * @member {nsIMsgIncomingServer}
     */
    readonly server: nsIMsgIncomingServer;

    readonly isServer: boolean;
    readonly canSubscribe: boolean;
    readonly canFileMessages: boolean;

    // this is an imap no select folder
    readonly noSelect: boolean;
    // this is an imap shared folder
    readonly imapShared: boolean;
    // can't delete from imap read-only
    readonly canDeleteMessages: boolean;

    /**
     * Does this folder allow subfolders?
     * For example, newsgroups cannot have subfolders, and the INBOX on some IMAP servers cannot have subfolders.
     * @member {boolean}
     */
    readonly canCreateSubfolders: boolean;

    /**
     * Can you change the name of this folder?
     * For example, newsgroups and some special folders can't be renamed.
     * @member {boolean}
     */
    readonly canRename: boolean;

    /**
     * Can folder be compacted? Only applicable to folders using mbox storage.
     * Doesn't mean a compaction operation will actually do anything - if there's
     * nothing to compact, the compaction will be a no-op.
     * @member {boolean}
     */
    readonly canCompact: boolean;

    /**
     * The phantom server folder.
     * @member {nsIMsgFolder}
     */
    readonly rootFolder: nsIMsgFolder;

    // TODO

    /**
     * @member {boolean}
     */
    readonly hasSubFolders: boolean;

    /**
     * @member {nsISimpleEnumerator}
     */
    readonly subFolders: nsISimpleEnumerator<nsIMsgFolder>;

    /**
     * @param {nsMsgFolderFlags}
     */
    getFlag(flagName: nsMsgFolderFlags): boolean;

    /**
     * Direct access to the set/get all the flags at once.
     * @member {number}
     */
    flags: number;

    /**
     * Gets the first folder that has the specified flags set.
     * @param {number} flags - The flag(s) to check for.
     * @returns {nsIMsgFolder} The folder or the first available child folder that has the specified flags set,
     * or null if there are none.
     */
    getFolderWithFlags(flags: number): nsIMsgFolder;

    /**
     * @param {nsIMsgDBHdr} msgHdr
     */
    getUriForMsg(msgHdr: nsIMsgDBHdr): string;

    // TODO

}