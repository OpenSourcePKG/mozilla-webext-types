import {nsISupports} from './nsISupports';

/**
 * An nsIFile is an abstract representation of a filename. It manages
 * filename encoding issues, pathname component separators ('/' vs. '\\'
 * vs. ':') and weird stuff like differing volumes with identical names, as
 * on pre-Darwin Macintoshes.
 *
 * This file has long introduced itself to new hackers with this opening
 * paragraph:
 *
 * - This is the only correct cross-platform way to specify a file.
 * Strings are not such a way. If you grew up on windows or unix, you
 * may think they are.  Welcome to reality.
 *
 * While taking the pose struck here to heart would be uncalled for, one
 * may safely conclude that writing cross-platform code is an embittering
 * experience.
 *
 * All methods with string parameters have two forms.  The preferred
 * form operates on UCS-2 encoded characters strings.  An alternate
 * form operates on characters strings encoded in the "native" charset.
 *
 * A string containing characters encoded in the native charset cannot
 * be safely passed to javascript via xpconnect.  Therefore, the "native
 * methods" are not scriptable.
 * @see https://searchfox.org/mozilla-central/source/xpcom/io/nsIFile.idl
 */
export interface nsIFile extends nsISupports {

    /**
     * NORMAL_FILE_TYPE - A normal file.
     */
    NORMAL_FILE_TYPE: 0;

    /**
     * DIRECTORY_TYPE - A directory/folder.
     */
    DIRECTORY_TYPE: 1;

    /**
     * This function is used for constructing a descendent of the current nsIFile.
     * @param {string} node - A string which is intended to be a child node of the nsIFile.
     * For security reasons, this cannot contain.
     * And cannot start with a directory separator.
     * For the |appendNative| method, the node must be in the native filesystem charset.
     */
    append(node: string): void;

    /**
     * Normalize the pathName (e.g. Removing .. And . Components on Unix).
     */
    normalize(): void;

    /**
     * Is a path.
     * @member {boolean}
     */
    readonly path: string;

    /**
     * @returns {boolean}
     */
    readonly exists: () => boolean;

    /**
     * This function will initialize the nsIFile object.
     * Any internal state information will be reset.
     * @param {string} filePath - A string which specifies a full file path to a location.
     * Relative paths will be treated as an
     * error (NS_ERROR_FILE_UNRECOGNIZED_PATH).
     * For initWithNativePath, the filePath must be in the native filesystem charset.
     */
    readonly initWithPath: (filePath: string) => void;
}