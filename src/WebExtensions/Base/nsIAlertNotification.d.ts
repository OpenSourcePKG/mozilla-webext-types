import {nsIPrincipal} from './nsIPrincipal.js';
import {nsISupports} from './nsISupports.js';

/**
 * nsIAlertNotification
 * @see https://searchfox.org/mozilla-central/source/toolkit/components/alerts/nsIAlertsService.idl
 */
export interface nsIAlertNotification extends nsISupports {

    /**
     * Initializes an alert notification
     * @param aName
     * @param aImageURL
     * @param aTitle
     * @param aText
     * @param aTextClickable
     * @param aCookie
     * @param aDir
     * @param aLang
     * @param aData
     * @param aPrincipal
     * @param aInPrivateBrowsing
     * @param aRequireInteraction
     * @param aSilent
     * @param aVibrate
     */
    init(
        aName?: string,
        aImageURL?: string,
        aTitle?: string,
        aText?: string,
        aTextClickable?: boolean,
        aCookie?: string,
        aDir?: string,
        aLang?: string,
        aData?: string,
        aPrincipal?: nsIPrincipal,
        aInPrivateBrowsing?: boolean,
        aRequireInteraction?: boolean,
        aSilent?: boolean,
        aVibrate?: number[]
    ): void;


}