import {Interfaces} from './Interfaces';

/**
 * @see https://github.com/dvanoni/notero/blob/eea39566dd76917c1a1dfdfa84b815d19af4bb0a/types/xpcom.d.ts#L65
 * @see https://searchfox.org/comm-central/source/mozilla/xpcom/base/nsISupports.idl
 */
export declare interface nsISupports extends Record<string, unknown> {

    /**
     * A run time mechanism for interface discovery.
     * @param {Interfaces} aIID - A requested interface IID.
     * @returns {Interfaces}
     */
    QueryInterface<I extends Interfaces[keyof Interfaces]>(aIID: I): I;
}