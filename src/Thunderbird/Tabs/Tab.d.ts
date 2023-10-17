/**
 * Tab
 *
 * @see https://webextension-api.thunderbird.net/en/115/tabs.html#tab
 */
export interface Tab {

    /**
     * active
     * Whether the tab is active in its window. (Does not necessarily mean the window is focused.)
     */
    active: boolean;

    /**
     * highlighted
     * Whether the tab is highlighted. Works as an alias of active
     */
    highlighted: boolean;

    /**
     * index
     * The zero-based index of the tab within its window.
     */
    index: number;

    /**
     * selected
     * Unsupported!
     * Whether the tab is selected.
     */
    selected?: boolean;

    /**
     * The CookieStore id used by the tab. Either a custom id created using the contextualIdentities API,
     * or a built-in one: firefox-default, firefox-container-1, firefox-container-2, firefox-container-3,
     * firefox-container-4, firefox-container-5. Note: The naming pattern was deliberately not changed for
     * Thunderbird, but kept for compatibility reasons.
     * @member {string}
     */
    cookieStoreId?: string;

    /**
     * favIconUrl
     * The URL of the tab’s favicon. This property is only present if the extension’s manifest includes the
     * tabs permission. It may also be an empty string if the tab is loading.
     */
    favIconUrl?: string;

    /**
     * height
     * The height of the tab in pixels.
     */
    height?: number;

    /**
     * id
     * The ID of the tab. Tab IDs are unique within a session.
     * Under some circumstances a Tab may not be assigned an ID.
     * Tab ID can also be set to TAB_ID_NONE for apps and devtools windows.
     */
    id?: number;

    /**
     * mailTab
     * Whether the tab is a 3-pane tab.
     */
    mailTab?: boolean;

    /**
     * spaceId
     * The id of the space.
     */
    spaceId?: number;

    /**
     * status
     * Either loading or complete.
     */
    status?: string;

    /**
     * title
     * The title of the tab. This property is only present if the extension’s manifest includes the tabs permission.
     */
    title?: string;

    /**
     * type
     * [Added in TB 91]
     */
    type?: 'addressBook' | 'calendar' | 'calendarEvent' | 'calendarTask' | 'chat' | 'content' | 'mail' | 'messageCompose' | 'messageDisplay' | 'special' | 'tasks';

    /**
     * url
     * The URL the tab is displaying. This property is only present if the extension’s manifest includes the tabs permission.
     */
    url?: string;

    /**
     * width
     * The width of the tab in pixels.
     */
    width?: number;

    /**
     * windowId
     * The ID of the window the tab is contained within.
     */
    windowId?: number;
}