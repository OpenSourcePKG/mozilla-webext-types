import {nsISupports} from './nsISupports';
import {nsIURI} from './nsIURI';
import {nsresult} from './nsresult';

/**
 * General interface that signify URL processing.
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIUrlListener.idl
 */
export declare interface nsIUrlListener extends nsISupports {

    /**
     * Called to signify the beginning of an URL processing.
     * @param {nsIURI} url - URL being processed.
     */
    OnStartRunningUrl(url: nsIURI): void;

    /**
     * Called to signify the end of an URL processing.
     * This call is always preceded by a call to OnStartRunningUrl.
     * @param {nsIURI} url - URL being processed.
     * @param {nsresult} aExitCode - A result code of URL processing.
     */
    OnStopRunningUrl(url: nsIURI, aExitCode: nsresult): void;
}