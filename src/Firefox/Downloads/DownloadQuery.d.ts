import {DownloadTime} from './DownloadTime';

/**
 * The DownloadQuery type of the downloads API defines a set of parameters that can be used to search the
 * downloads manager for a specific set of downloads.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
 */
export declare interface DownloadQuery {

    /**
     * The cookie store ID of the contextual identity in which the download took place.
     * @member {string}
     */
    cookieStoreId?: string;

    /**
     * An array of strings. Include only DownloadItems whose filename or url contains all of the given strings.
     * You can also include terms beginning with a dash (-) — these terms must not be contained in the item's
     * filename or url for it to be included.
     * @member {string[]}
     */
    query?: string[];

    /**
     * A DownloadTime. Include only DownloadItems that started before the given time.
     * @member {DownloadTime}
     */
    startedBefore?: DownloadTime;

    /**
     * A DownloadTime. Include only DownloadItems that started after the given time.
     * @member {DownloadTime}
     */
    startedAfter?: DownloadTime;

    /**
     * A DownloadTime. Include only DownloadItems that ended before the given time.
     * @member {DownloadTime}
     */
    endedBefore?: DownloadTime;

    /**
     * A DownloadTime. Include only DownloadItems that ended after the given time.
     * @member {DownloadTime}
     */
    endedAfter?: DownloadTime;

    /**
     * A number representing a number of bytes. Include only DownloadItems whose totalBytes is greater than the given number.
     * @member {number}
     */
    totalBytesGreater?: number;

    /**
     * A number representing a number of bytes. Include only DownloadItems whose totalBytes is less than the given number.
     * @member {number}
     */
    totalBytesLess?: number;

    /**
     * A string representing a regular expression. Include only DownloadItems whose filename value matches the given regular expression.
     * @member {string}
     */
    filenameRegex?: string;

    /**
     * A string representing a regular expression. Include only DownloadItems whose url value matches the given regular expression.
     * @member {string}
     */
    urlRegex?: string;

    /**
     * An integer representing a number of results. Include only the specified number of DownloadItems.
     * @member {number}
     */
    limit?: number;

    /**
     * An array of strings representing DownloadItem properties the search results should be sorted by. For example,
     * including startTime then totalBytes in the array would sort the DownloadItems by their start time, then total
     * bytes — in ascending order. To specify sorting by a property in descending order, prefix it with a hyphen,
     * for example -startTime.
     * @member {string[]}
     */
    orderBy?: string[];

    /**
     * An integer representing the ID of the downloads.DownloadItem you want to query.
     * @member {number}
     */
    id?: number;

    // TODO
}