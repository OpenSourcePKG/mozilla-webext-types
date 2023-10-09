import {nsIFile} from './nsIFile';
import {nsIOutputStream} from './nsIOutputStream';

/**
 * An output stream that lets you stream to a file.
 * @see https://searchfox.org/mozilla-central/source/netwerk/base/nsIFileStreams.idl
 */
export declare interface nsIFileOutputStream extends nsIOutputStream {

    /**
     * @param {nsIFile} file - File to write to.
     * @param {number} ioFlags - File open flags listed in prio.h (see PR_Open documentation) or -1 to open the
     * file in default mode (PR_WRONLY | PR_CREATE_FILE | PR_TRUNCATE).
     * @param {number} perm - File mode bits listed in prio.h or -1 to use the default permissions (0664).
     * @param {number} behaviorFlags - Flags specifying various behaviors of the class (currently none supported).
     */
    init(file: nsIFile, ioFlags: number, perm: number, behaviorFlags: number): void;

    DEFER_OPEN: 0;

}