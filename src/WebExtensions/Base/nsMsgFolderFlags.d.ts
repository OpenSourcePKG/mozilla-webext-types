import {nsISupports} from './nsISupports';

/**
 * Flags about a folder or a newsgroup.
 * @see https://github.com/mozilla/releases-comm-central/blob/053a1dcb55758122e63a58f288d3caa4aa24351c/mailnews/base/public/nsMsgFolderFlags.idl#L11
 */
export interface nsMsgFolderFlags extends nsISupports {

    /**
     * This folder is a newsgroup folder.
     * @member {number}
     */
    readonly Newsgroup: 0x00000001;

    /**
     * Used to be for a folder that is a news server (NewsHost).
     * @member {number}
     */
    readonly Unused3: 0x00000002;

    /**
     * This folder is a mail folder.
     * @member {number}
     */
    readonly Mail: 0x00000004;

    /**
     * Whether this is a directory: NewsHosts are always directories.
     * NewsGroups can be directories if we are in 'show all-groups' mode.
     * Mail folders will have this bit if they are really directories, not files.
     * (Note that directories may have zero children.).
     * @member {number}
     */
    readonly Directory: 0x00000008;

    /**
     * Whether the children of this folder are currently hidden in the listing.
     * This will only be present if the nsMsgFolderFlags::Directory bit is on.
     * @member {number}
     */
    readonly Elided: 0x00000010;

    /**
     * Whether this is a virtual search folder.
     * @member {number}
     */
    readonly Virtual: 0x00000020;

    /**
     * Used to be for folders representing a subscribed newsgroup (Subscribed).
     * @member {number}
     */
    readonly Unused5: 0x00000040;

    /**
     * Used to be for new newsgroups added by the `Check New Groups' command.
     * @member {number}
     */
    readonly Unused2: 0x00000080;

    /**
     * Whether this is the trash folder.
     * @member {number}
     */
    readonly Trash: 0x00000100;

    /**
     * Whether this is a folder that sent mail gets delivered to.
     * @member {number}
     */
    readonly SentMail: 0x00000200;

    /**
     * Whether this is the folder in which unfinished, unsent messages are saved for later editing.
     * @member {number}
     */
    readonly Drafts: 0x00000400;

    /**
     * Whether this is the folder in which messages are queued for later delivery.
     * @member {number}
     */
    readonly Queue: 0x00000800;

    /**
     * Whether this is the primary inbox folder.
     * @member {number}
     */
    readonly Inbox: 0x00001000;
}