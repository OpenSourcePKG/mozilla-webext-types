/**
 * MailFolder
 * An object describing a mail folder, as returned for example by the getParentFolders(folder, [includeSubFolders]) or
 * getSubFolders(folderOrAccount, [includeSubFolders]) methods, or part of a MailAccount object, which is returned for
 * example by the list([includeFolders]) and get(accountId, [includeFolders]) methods.
 * The subFolders property is only included if requested.
 *
 * @see https://webextension-api.thunderbird.net/en/115/folders.html#mailfolder
 */
export interface MailFolder {

    /**
     * accountId
     * The account this folder belongs to.
     */
    accountId: string;

    /**
     * path
     * Path to this folder in the account. Although paths look predictable, never guess a folder’s path, as there
     * are a number of reasons why it may not be what you think it is. Use getParentFolders(folder,
     * [includeSubFolders]) or getSubFolders(folderOrAccount, [includeSubFolders]) to obtain hierarchy information.
     */
    path: string;

    /**
     * name
     * The human-friendly name of this folder.
     */
    name?: string;

    /**
     * subFolders
     * [Added in TB 74] Subfolders are only included if requested. They will be returned in the same order as used
     * in Thunderbird’s folder pane.
     */
    subFolders?: MailFolder[];

    /**
     * type
     * The type of folder, for several common types.
     */
    type?: 'inbox' | 'drafts' | 'sent' | 'trash' | 'templates' | 'archives' | 'junk' | 'outbox';
}