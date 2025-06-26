import {nsISupports} from './nsISupports.js';

/**
 * @see https://searchfox.org/mozilla-central/source/xpcom/ds/nsIObserver.idl
 */
export interface nsIObserver extends nsISupports {

    observe(aSubject: nsISupports, aTopic: string, aData: string): void;
}