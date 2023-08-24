/**
 * nsIFile
 */
export interface nsIFile {

    /**
     * exists
     */
    readonly exists: () => boolean;

    /**
     * initWithPath
     */
    readonly initWithPath: (filePath: string) => void;
}