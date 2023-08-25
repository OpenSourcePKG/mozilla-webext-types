/**
 * nsIFile
 * @see https://searchfox.org/mozilla-central/source/xpcom/io/nsIFile.idl
 */
export interface nsIFile {

    /**
     * path
     */
    readonly path: string;

    /**
     * exists
     */
    readonly exists: () => boolean;

    /**
     * initWithPath
     * This function will initialize the nsIFile object. Any internal state information will be reset.
     *
     * @param filePath A string which specifies a full file path to a location.  Relative paths will be treated as an
     * error (NS_ERROR_FILE_UNRECOGNIZED_PATH). For initWithNativePath, the filePath must be in the native filesystem charset.
     */
    readonly initWithPath: (filePath: string) => void;
}