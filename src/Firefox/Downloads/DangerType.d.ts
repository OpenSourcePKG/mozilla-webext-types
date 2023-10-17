/**
 * The DangerType type of the downloads API defines a set of possible reasons that a downloadable
 * file might be considered dangerous.
 * A downloads.DownloadItem's danger property will contain a string taken from the values defined in this type.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DangerType
 */
export declare type DangerType =
    // The download's filename is suspicious.
    'file' |
    // The download's URL is known to be malicious.
    'url' |
    // The downloaded file is known to be malicious.
    'content' |
    // The download's URL is not commonly downloaded.
    'uncommon' |
    // The download came from a host known to distribute malicious binaries.
    'host' |
    // The download is potentially unwanted or unsafe.
    'unwanted' |
    // The download presents no known danger to the user's computer.
    'safe' |
    // The user has accepted the dangerous download.
    'accepted';