import {amIAddonManagerStartup} from '../Extensions/amIAddonManagerStartup';
import {nsIFile} from './nsIFile';
import {nsIFilePicker} from './nsIFilePicker';
import {nsIMessenger} from './nsIMessenger';
import {nsIMsgMessageService} from './nsIMsgMessageService';
import {nsIPrefService} from './nsIPrefService';
import {nsIScriptableInputStream} from './nsIScriptableInputStream';
import {nsIStreamListener} from './nsIStreamListener';
import {nsISupports} from './nsISupports';
import {nsMsgFolderFlags} from './nsMsgFolderFlags';

export type Interfaces = {

    amIAddonManagerStartup: amIAddonManagerStartup;
    nsISupports: nsISupports;
    nsIFile: nsIFile;
    nsIFilePicker: nsIFilePicker;
    nsMsgFolderFlags: nsMsgFolderFlags;
    nsIPrefService: nsIPrefService;
    nsIMsgMessageService: nsIMsgMessageService;
    nsIStreamListener: nsIStreamListener;
    nsIScriptableInputStream: nsIScriptableInputStream;
    nsIMessenger: nsIMessenger;
};