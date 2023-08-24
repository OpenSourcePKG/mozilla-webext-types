import {UpdatePropertyName} from './UpdatePropertyName';

/**
 * UpdateFilter
 * An object describing filters to apply to tabs.onUpdated events.
 */
export interface UpdateFilter {

    /**
     * properties
     * A list of property names. Events that do not match any of the names will be filtered out.
     */
    properties?: UpdatePropertyName[];

    /**
     * tabId
     */
    tabId?: number;

    /**
     * urls
     * A list of URLs or URL patterns. Events that cannot match any of the URLs will be filtered out. Filtering with urls requires the tabs or activeTab permission.
     */
    urls?: string[];

    /**
     * windowsId
     */
    windowId?: number;
}