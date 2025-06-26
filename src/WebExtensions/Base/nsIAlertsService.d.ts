import {nsIAlertNotification} from './nsIAlertNotification.js';
import {nsIObserver} from './nsIObserver.js';
import {nsIPrincipal} from './nsIPrincipal.js';
import {nsISupports} from './nsISupports.js';

/**
 * @see https://searchfox.org/mozilla-central/source/toolkit/components/alerts/nsIAlertsService.idl
 */
export interface nsIAlertsService extends nsISupports {

    showAlert(aAlert: nsIAlertNotification): void;

    showAlertNotification(
        aImageURL: string|null,
        aTitle: string,
        aText: string,
        aTextClickable?: boolean,
        aCookie?: string,
        aAlertListener?: nsIObserver,
        aName?: string,
        aDir?: string,
        aLang?: string,
        aData?: string,
        aPrincipal?: nsIPrincipal,
        aInPrivateBrowsing?: boolean,
        aRequireInteraction?: boolean
    ): void;
}