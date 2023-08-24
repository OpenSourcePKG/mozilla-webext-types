/**
 * nsIURI
 *
 * @see https://searchfox.org/mozilla-central/source/__GENERATED__/dist/include/nsIURI.h
 */
export interface nsIURI {

    /**
     * resolve
     */
    readonly resolve: (relativePath: string) => string;

    /**
     * asciiHost
     */
    readonly asciiHost: string;
}