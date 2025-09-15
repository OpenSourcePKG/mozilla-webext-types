import {nsIFile} from './nsIFile.js';
import {folderListenerNotifyFlagValue, nsIFolderListener} from './nsIFolderListener.js';
import {nsIMsgUserFeedbackListener} from './nsIMsgUserFeedbackListener.js';
import {nsIMsgWindow} from './nsIMsgWindow.js';
import {nsISupports} from './nsISupports.js';
import {nsITransportSecurityInfo} from './nsITransportSecurityInfo.js';
import {nsIURI} from './nsIURI.js';

/*
 * The mail session is a replacement for the old 4.x MSG_Master object. It
 * contains mail session generic information such as the account manager, etc
 * I'm starting this off as an empty interface and as people feel they need to
 * add more information to it, they can. I think this is a better approach
 * than trying to port over the old MSG_Master in its entirety as that had a
 * lot of cruft in it....
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgMailSession.idl
 */
export interface nsIMsgMailSession extends nsISupports {
    Shutdown(): void;

    /**
     * Adds a listener to be notified when folders update.
     * @param {nsIFolderListener} aListener - The listener to add.
     * @param {folderListenerNotifyFlagValue} aNotifyFlags - A combination of flags detailing on which operations to notify the listener. See nsIFolderListener.idl for details.
     */
    AddFolderListener(aListener: nsIFolderListener, aNotifyFlags: folderListenerNotifyFlagValue): void;

    /**
     * Removes a listener from the folder notification list.
     * @param {nsIFolderListener} aListener - The listener to remove.
     */
    RemoveFolderListener(aListener: nsIFolderListener): void;

    /**
     * Adds a listener to be notified of alert or prompt style feedback that should go to the user.
     * @param {nsIMsgUserFeedbackListener} aListener - The listener to add.
     */
    addUserFeedbackListener(aListener: nsIMsgUserFeedbackListener): void;

    /**
     * Removes a user feedback listener.
     * @param {nsIMsgUserFeedbackListener} aListener - The listener to remove.
     */
    removeUserFeedbackListener(aListener: nsIMsgUserFeedbackListener): void;

    /**
     * Call to alert the listeners of the message. If there are no listeners, or the listeners do not handle the alert, then this function will present the user with a modal dialog if `aSilent` isn't true.
     * @param {string} aMessage - The localized message string to alert.
     * @param {nsIURI} aUri - The URI relevant to the operation which caused the alert to be generated.
     * @param {boolean} aSilent - If true, this method will notify listener (so they can e.g. store the alert in the activity manager) but will not result in a visible alert to the user. This can be needed for background operations where we don't want to notify the user in the same way as "normal" operations.
     */
    alertUser(aMessage: string, aUri: nsIURI, aSilent: boolean): void;

    /**
     * Call to inform the listeners of a certificate error. The listener should alert the user about the error and (if appropriate) allow the user to add a certificate override.
     * @param {nsITransportSecurityInfo} securityInfo - The security information about the operation.
     * @param {nsIURI} uri - The URI relevant to the operation.
     */
    alertCertError(securityInfo: nsITransportSecurityInfo, uri: nsIURI): void;

    topmostMsgWindow: nsIMsgWindow;
    AddMsgWindow(msgWindow: nsIMsgWindow): void;
    RemoveMsgWindow(msgWindow: nsIMsgWindow): void;

    ConvertMsgURIToMsgURL(aURI: string, aMsgWindow: nsIMsgWindow): string;
    getDataFilesDir(dirName: string): nsIFile;
}