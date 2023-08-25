import {nsIFile} from '../Base/nsIFile';
import {nsIFilePicker} from '../Base/nsIFilePicker';
import {nsMsgFolderFlags} from '../Base/nsMsgFolderFlags';

/**
 * ComponentsInterfaces
 */
export interface ComponentsInterfaces {
    [key: string]: object;

    /**
     * nsIFile
     */
    readonly nsIFile: nsIFile;

    /**
     * nsIFilePicker
     */
    readonly nsIFilePicker: nsIFilePicker;

    /**
     * nsMsgFolderFlags
     */
    readonly nsMsgFolderFlags: nsMsgFolderFlags;
}