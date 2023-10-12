import {nsIFile} from './Base/nsIFile';
import {nsIMsgFolder} from './Base/nsIMsgFolder';

/**
 * This module has several utility functions for use by both core and
 * third-party code. Some functions are aimed at code that doesn't have a
 * window context, while others can be used anywhere.
 * @see https://searchfox.org/comm-central/source/mail/modules/MailUtils.jsm
 */
export declare interface MailUtils {

    /**
     * Restarts the application, keeping it in safe mode if it is already in safe mode.
     */
    restartApplication(): void;

    /**
     * Discover all folders. This is useful during startup, when you have code
     * that deals with folders and that executes before the main 3pane window is
     * open (the folder tree wouldn't have been initialized yet).
     */
    discoverFolders(): void;

    /**
     * Get the nsIMsgFolder corresponding to this URI.
     * @param {nsIFile} aFile - The nsIFile to convert to a folder.
     * @returns {nsIMsgFolder} The nsIMsgFolder corresponding to aFile, or null if the folder isn't found.
     */
    getFolderForFileInProfile(aFile: nsIFile): nsIMsgFolder;

    /**
     * Get the nsIMsgFolder corresponding to this URI.
     * @param {string} aFolderURI - The URI of the target folder.
     * @returns {nsIMsgFolder} Folder corresponding to this URI, or null if the folder doesn't already exist.
     */
    getExistingFolder(aFolderURI: string): nsIMsgFolder;

    /**
     * Get the nsIMsgFolder corresponding to this URI, or create a detached folder if it doesn't already exist.
     * @param {string} aFolderURI - The URI of the target folder.
     * @returns {nsIMsgFolder} Folder corresponding to this URI.
     */
    getOrCreateFolder(aFolderURI: string): nsIMsgFolder;

    // TODO
}