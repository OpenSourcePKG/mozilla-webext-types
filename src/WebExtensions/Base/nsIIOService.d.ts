import {nsISupports} from './nsISupports';
import {nsIURI} from './nsIURI';

/**
 * @see https://searchfox.org/mozilla-central/source/netwerk/base/nsIIOService.idl
 */
export declare interface nsIIOService extends nsISupports {

    /**
     * This method constructs a new URI based on the scheme of the URI spec.
     * QueryInterface can be used on the resulting URI object to obtain a more specific type of URI.
     * @param {string} aSpec
     * @param {[string]} aOriginCharset
     * @param {[nsIURI]} aBaseURI
     * @returns {nsIURI}
     */
    newURI(aSpec: string, aOriginCharset?: string|null, aBaseURI?: nsIURI): nsIURI;
}