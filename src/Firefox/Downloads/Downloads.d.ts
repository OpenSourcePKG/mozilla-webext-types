import {DownloadItem} from './DownloadItem';
import {FilenameConflictAction} from './FilenameConflictAction';

/**
 * Enables extensions to interact with the browser's download manager. You can use this API module to download files,
 * cancel, pause, resume downloads, and show downloaded files in the file manager.
 *
 * To use this API you need to have the "downloads" API permission specified in your manifest.json file.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads
 */
export declare interface Downloads {

    /**
     * The download() function of the downloads API downloads a file, given its URL and other optional preferences.
     *
     * If the URL uses the HTTP or HTTPS protocol, the request includes all the relevant cookies, that is, those
     * cookies set for the URL's hostname, secure flag, path, and so on. The default cookies, the cookies from the
     * normal browsing session, are used unless:
     *
     * the incognito option is used, then the private browsing cookies are used.
     * The cookieStoreId option is used, then the cookies from the specified store are used.
     * If both filename and saveAs are specified, the Save As dialog is displayed, populated with the filename.
     *
     * This is an asynchronous function that returns a Promise.
     * @param {object} options - An object specifying what file you wish to download, and any other preferences you
     * wish to set concerning the download.
     * @returns {DownloadItem} A Promise. If the download started successfully, the promise will be fulfilled with
     * the id of the new downloads.DownloadItem. Otherwise, the promise will be rejected with an error message taken
     * from downloads.InterruptReason.
     */
    download(options: {

        /**
         * A boolean flag that enables downloads to continue even if they encounter HTTP errors. Using this flag,
         * for example, enables the download of server error pages. Default value false. When set to:
         * - false, the download is canceled when it encounters an HTTP error.
         * - true, the download continues when an HTTP error is encountered and the HTTP server error is
         * not reported. However, if the download fails due to file-related, network-related, user-related, or
         * other error, that error is reported.
         * @member {boolean}
         */
        allowHttpErrors?: boolean;

        /**
         * A string representing the post body of the request.
         * @member {string}
         */
        body?: string;

        /**
         * A string representing the action you want taken if there is a filename conflict, as defined in the
         * downloads.FilenameConflictAction type (defaults to "uniquify" when it is not specified).
         */
        conflictAction?: FilenameConflictAction;

        /**
         * The cookie store ID of the contextual identity the download is associated with. If omitted,
         * the default cookie store is used. Use requires the "cookies" API permission.
         * @member {string}
         */
        cookieStoreId?: string;

        /**
         * A string representing a file path relative to the default downloads directory — this provides the location
         * where you want the file to be saved, and what filename you want to use. Absolute paths, empty paths, path
         * components that start and/or end with a dot (.), and paths containing back-references (../) will cause
         * an error. If omitted, this value will default to the filename already given to the download file, and a
         * location immediately inside the downloads directory.
         * @member {string}
         */
        filename?: string;

        /**
         * If the URL uses the HTTP or HTTPS protocols, an array of objects representing additional HTTP headers to
         * send with the request. Each header is represented as a dictionary object containing the keys name and
         * either value or binaryValue. The headers that are forbidden by XMLHttpRequest and fetch cannot be specified,
         * however, Firefox 70 and later enables the use of the Referer header. Attempting to use a forbidden
         * header throws an error.
         * @member {object[]}
         */
        headers?: object[];

        /**
         * A boolean: if present and set to true, then associate this download with a private browsing session.
         * This means that it will only appear in the download manager for any private windows that are currently open.
         * @member {boolean}
         */
        incognito?: boolean;

        /**
         * A string representing the HTTP method to use if the url uses the HTTP[S] protocol.
         * This may be either "GET" or "POST".
         * @member {string}
         */
        method?: string;

        /**
         * A boolean that specifies whether to provide a file chooser dialog to allow the user to
         * select a filename (true), or not (false).
         * If this option is omitted, the browser will show the file chooser or not based on the
         * general user preference for this behavior (in Firefox this preference is labeled "Always ask you
         * where to save files" in about:preferences, or browser.download.useDownloadDir in about:config).
         * @member {string}
         */
        saveAs?: boolean;

        /**
         * A string representing the URL to download.
         * @member {string}
         */
        url?: string;
    }): Promise<DownloadItem>;
}