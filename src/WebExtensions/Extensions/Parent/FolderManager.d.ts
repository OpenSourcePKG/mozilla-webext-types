import {MailFolder} from '../../../Thunderbird/Folders/MailFolder';
import {nsIMsgFolder} from '../../Base/nsIMsgFolder';
import {ExtensionData} from '../ExtensionData';

/**
 * FolderManager
 *
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#2179
 */
export interface FolderManager {

    /**
     * extension
     */
    extension: ExtensionData;

    /**
     * convert
     * @param folder
     * @param accountId
     */
    convert(folder: nsIMsgFolder, accountId?: string): MailFolder;

    /**
     * get
     * @param accountId
     * @param path
     */
    get(accountId: string, path: string): nsIMsgFolder;
}