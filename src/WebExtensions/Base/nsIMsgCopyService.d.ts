import {nsIMsgCopyServiceListener} from './nsIMsgCopyServiceListener';
import {nsIMsgDBHdr} from './nsIMsgDBHdr';
import {nsIMsgFolder} from './nsIMsgFolder';
import {nsIMsgWindow} from './nsIMsgWindow';
import {nsISupports} from './nsISupports';

/**
 * NsIMsgCopyService is a central point for kicking off message and folder copy/move operations.
 * Each operation is queued up and executed in sequence. The actual work is handled by folder
 * code in an asynchronous fashion. The folder indicates completion by calling notifyCompletion().
 *
 * If the operation was initiated with a non-null nsIMsgCopyServiceListener,
 * its OnStartCopy() and OnStopCopy() methods will be called when the
 * operation begins/ends. Any errors are communicated via the result code
 * parameter passed to OnStopCopy().
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIMsgCopyService.idl
 */
export declare interface nsIMsgCopyService extends nsISupports {

    /**
     * Copies or moves existing messages from source folder to destination folder.
     * @param {nsIMsgFolder} srcFolder - Source folder of an operation.
     * @param {nsIMsgDBHdr[]} messages - The array of nsIMsgHdrs in source folder which will be moved/copied.
     * @param {nsIMsgFolder} dstFolder - Destination folder of operation.
     * @param {boolean} isMove - False for copy operation, true for move operation.
     * @param {nsIMsgCopyServiceListener|null} listener - Listener which receive operation notifications.
     * @param {nsIMsgWindow|null} msgWindow - Window for notification callbacks, can be null.
     * @param {boolean} allowUndo - Specifies if this operation will be done as an transaction that can be undone.
     */
    copyMessages(
        srcFolder: nsIMsgFolder,
        messages: nsIMsgDBHdr[],
        dstFolder: nsIMsgFolder,
        isMove: boolean,
        listener: nsIMsgCopyServiceListener|null,
        msgWindow: nsIMsgWindow|null,
        allowUndo: boolean
    ): void;

    // TODO

}