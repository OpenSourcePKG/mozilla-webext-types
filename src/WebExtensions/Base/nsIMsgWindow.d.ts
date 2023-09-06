import {mozIDOMWindowProxy} from './mozIDOMWindowProxy';
import {nsIMsgFolder} from './nsIMsgFolder';
import {nsISupports} from './nsISupports';

/**
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgWindow.idl
 */
export declare interface nsIMsgWindow extends nsISupports {

    openFolder: nsIMsgFolder;

    /**
     * Has a running url been stopped? If you care about checking
     * this flag, you need to clear it before you start your operation since
     * there's no convenient place to clear it.
     */
    stopped: boolean;

    domWindow: mozIDOMWindowProxy;

    /**
     * When the msg window is being unloaded from the content window,
     * we can use this notification to force a flush on anything the
     * msg window hangs on too. For some reason xpconnect is still hanging
     * onto the msg window even though all of our objects have let go of it
     * this forces a release...
     */
    closeWindow(): void;
}