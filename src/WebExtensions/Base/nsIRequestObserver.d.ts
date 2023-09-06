import {nsISupports} from './nsISupports';
import {nsresult} from './nsresult';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/netwerk/base/nsIRequestObserver.idl
 */
export declare interface nsIRequestObserver extends nsISupports {

    /**
     * Called to signify the beginning of an asynchronous request.
     * An exception thrown from onStartRequest has the side-effect of causing the request to be canceled.
     * @param {nsIRequest} aRequest - Request being observed.
     */
    onStartRequest(aRequest: nsIRequest): void;

    /**
     * Called to signify the end of an asynchronous request.
     * This call is always preceded by a call to onStartRequest.
     * @param {nsIRequest} aRequest - Request being observed.
     * @param {nsresult} aStatusCode - Reason for stopping (NS_OK if completed successfully).
     * @throws An exception thrown from onStopRequest is generally ignored.
     */
    onStopRequest(aRequest: nsIRequest, aStatusCode: nsresult);
}