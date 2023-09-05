/**
 * The object describing the hook the caller wants to register.
 * @see https://searchfox.org/comm-central/source/mail/modules/ExtensionSupport.jsm#21
 */
export interface ESExtensionHook {

    /**
     * An array of strings of document URLs on which the given callback should run. If not specified, run on all windows.
     * @member {string[]}
     */
    chromeURLs: string[];

    /**
     * The callback function to run when window loads the matching document.
     * @param {} win - Receive the matching window object.
     */
    onLoadWindow(win: any): void;

    /**
     * The callback function to run when window unloads the matching document.
     * @param {} win - Receive the matching window object.
     */
    onUnloadWindow(win: any): void;
}

/**
 * Helper functions for use by extensions that should ease them plug into the application.
 * @see https://searchfox.org/comm-central/source/mail/modules/ExtensionSupport.jsm
 */
export interface ExtensionSupport {

    /**
     * Register listening for windows getting opened that will run the specified callback function
     * when a matching window is loaded.
     * @param {string} aID - Some identification of the caller, usually the extension ID.
     * @param {ESExtensionHook} aExtensionHook - The object describing the hook the caller wants to register.
     * @returns {boolean} True if the passed arguments were valid and the caller could be registered. False otherwise.
     */
    registerWindowListener(aID: string, aExtensionHook: ESExtensionHook): boolean;

    /**
     * Unregister listening for windows for the given caller.
     * @param {string} aID - Some identification of the caller, usually the extension ID.
     * @returns {boolean} True if the passed arguments were valid and the caller could be unregistered. False otherwise.
     */
    unregisterWindowListener(aID: string): boolean;

    /**
     * @returns {any[]}
     */
    openWindows(): any[];

    /**
     * @returns {number}
     */
    registeredWindowListenerCount(): number;
}