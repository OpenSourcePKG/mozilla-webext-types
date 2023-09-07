import {nsISupports} from './nsISupports';

/**
 * @see https://searchfox.org/comm-central/source/mozilla/netwerk/base/nsIRequest.idl
 */
export declare interface nsIRequest extends nsISupports {

    /**
     * The name of the request.  Often this is the URI of the request.
     */
    name: string;
}