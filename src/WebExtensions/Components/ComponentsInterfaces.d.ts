import {nsIFile} from '../Base/nsIFile';
import {nsIFilePicker} from '../Base/nsIFilePicker';
import {nsMsgFolderFlags} from '../Base/nsMsgFolderFlags';
import {nsIPrefService} from '../Base/nsIPrefService';

/**
 * ComponentsInterfaces
 */
export interface ComponentsInterfaces {
    [key: string]: object;

    /**
     * nsIFile
     */
    nsIFile: nsIFile;

    /**
     * nsIFilePicker
     */
    nsIFilePicker: nsIFilePicker;

    /**
     * nsMsgFolderFlags
     */
    nsMsgFolderFlags: nsMsgFolderFlags;

    /**
     * nsIPrefService
     */
    nsIPrefService: nsIPrefService;
}