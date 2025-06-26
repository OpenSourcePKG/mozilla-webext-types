import {nsISupports} from './nsISupports.js';

/**
 * nsIPrincipal
 * @see https://searchfox.org/mozilla-central/source/caps/nsIPrincipal.idl
 */
export interface nsIPrincipal extends nsISupports {

    /**
     * Returns whether the other principal is equivalent to this principal.
     * Principals are considered equal if they are the same principal, or
     * they have the same origin.
     * @param {nsIPrincipal} other
     * @returns {boolean}
     */
    equals(other: nsIPrincipal): boolean;
}