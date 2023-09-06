import {nsISupports} from './nsISupports';

/**
 * NsIURI - interface for an uniform resource identifier w/ i18n support.
 * @see https://searchfox.org/mozilla-central/source/__GENERATED__/dist/include/nsIURI.h
 * @see https://searchfox.org/comm-central/source/mozilla/netwerk/base/nsIURI.idl
 */
export interface nsIURI extends nsISupports {

    /**
     * This method resolves a relative string into an absolute URI string,
     * using this URI as the base.
     * Note: Some implementations may have no concept of a relative URI.
     * @param {string} relativePath
     * @returns {string}
     */
    readonly resolve: (relativePath: string) => string;

    /**
     * @member {string}
     */
    readonly asciiHost: string;
}