import {WindowType} from './WindowType';

/**
 * Specifies additional requirements for the returned windows.
 * @see https://webextension-api.thunderbird.net/en/latest/windows.html#windows-getinfo
 */
export interface GetInfo {

    /**
     * If true, the Window returned will have a tabs property that contains an array of Tab objects representing the
     * tabs inside the window. The Tab objects only contain the url, title and favIconUrl properties if the
     * extension’s manifest file includes the tabs permission.
     * @member {[boolean]}
     */
    populate?: boolean;

    /**
     * If set, the Window returned will be filtered based on its type. Supported by getAll([getInfo]) only,
     * ignored in all other functions.
     */
    windowTypes?: WindowType;
}