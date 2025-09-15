import {nsIMsgDBHdr} from './nsIMsgDBHdr.js';
import {nsIMsgFolder} from './nsIMsgFolder.js';
import {nsISupports} from './nsISupports.js';

export type folderListenerNotifyFlagValue = number;

/**
 * nsIFolderListener defines callbacks to handle various notifications
 * about changes in folders.
 * These listeners can be attached to individual folders, or they
 * can be registered globally, with nsIMsgMailSession.
 * These notifications originate from nsIMsgFolder implementations.
 * (nsIMsgFolder has corresponding methods for generating these
 * notifications).
 * @see https://searchfox.org/comm-central/source/mailnews/base/public/nsIFolderListener.idl#11
 */
export interface nsIFolderListener extends nsISupports {
    // "added" flag covers adding both messages and child folders.
    added: 0x1;
    onFolderAdded(parent: nsIMsgFolder, child: nsIMsgFolder): void;
    onMessageAdded(parent: nsIMsgFolder, msg: nsIMsgDBHdr): void;

    // "removed" flag covers removing both messages and child folders.
    removed: 0x2;
    onFolderRemoved(parent: nsIMsgFolder, child: nsIMsgFolder): void;
    onMessageRemoved(parent: nsIMsgFolder, msg: nsIMsgDBHdr): void;

    propertyChanged: 0x4;
    onFolderPropertyChanged(folder: nsIMsgFolder, property: string, oldValue: string, newValue: string): void;

    intPropertyChanged: 0x8;
    // While this property handles long long (64bit wide) values,
    // the Javascript engine will only pass values up to 2^53 to the consumers.
    onFolderIntPropertyChanged(folder: nsIMsgFolder, property: string, oldValue: number, newValue: number): void;

    boolPropertyChanged: 0x10;
    onFolderBoolPropertyChanged(folder: nsIMsgFolder, property: string, oldValue: boolean, newValue: boolean): void;

    // 0x20 was once unicharPropertyChanged, but is now unused.

    propertyFlagChanged: 0x40;
    onFolderPropertyFlagChanged(msg: nsIMsgDBHdr, property: string, oldFlag: number, newFlag: number): void;

    event: 0x80;
    onFolderEvent(folder: nsIMsgFolder, event: string): void;

    all: 0xFFFFFFFF;
}