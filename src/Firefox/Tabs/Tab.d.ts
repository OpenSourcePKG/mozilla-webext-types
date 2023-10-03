import {MutedInfo} from './MutedInfo';

/**
 * The type tabs.Tab contains information about a tab. This provides access to information about what content is in
 * the tab, how large the content is, what special states or restrictions are in effect, and so forth.
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab
 */
export interface Tab {

    /**
     * Whether the tab is active in its window. This may be true even if the tab's window is not currently focused.
     *
     * The active tab is usually the selected one. However, on Firefox for Android, extension popups open in a new tab.
     * When this popup tab is selected, the active tab will instead be the one in which the popup opened.
     * @member {boolean}
     */
    active: boolean;

    /**
     * Indicates whether the tab is drawing attention. For example, when the tab displays a modal dialog,
     * attention will be true.
     * @member {[boolean]}
     */
    attention?: boolean;

    /**
     * Indicates whether the tab is producing sound. However, the user will not hear the sound if the tab is
     * muted (see the mutedInfo property).
     * @member {[boolean]}
     */
    audible?: boolean;

    /**
     * Whether the tab can be discarded by the browser. The default value is true. When set to false, the browser
     * cannot automatically discard the tab. However, the tab can be discarded by tabs.discard.
     * @member {[boolean]}
     */
    autoDiscardable?: boolean;

    /**
     * The cookie store of the tab. If different tabs can have different cookie stores (for example, to support
     * contextual identity), you can pass this as the storeId option into various methods of the cookies API, to set
     * and get cookies associated with this tab's cookie store. Only present if the extension has the "cookies" permission.
     * @member {[string]}
     */
    cookieStoreId?: string;

    /**
     * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory,
     * but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
     * @member {[boolean]}
     */
    discarded?: boolean;

    /**
     * The URL of the tab's favicon. Only present if the extension has the "tabs" permission or host permissions.
     * It may also be undefined if the page has no favicon, or an empty string if the tab is loading.
     * @member {[string]}
     */
    favIconUrl?: string;

    /**
     * The height of the tab in pixels.
     * @member {[number]}
     */
    height?: number;

    /**
     * Whether the tab is hidden.
     * @member {boolean}
     */
    hidden: boolean;

    /**
     * Whether the tab is highlighted, i.e., part of the current tab selection. An active tab is always highlighted,
     * but some browsers may allow additional tabs to be highlighted, for example, by clicking them while
     * holding Ctrl, Shift or ⌘ Command keys.
     *
     * Firefox for Android doesn't support highlighting multiple tabs.
     * @member {boolean}
     */
    highlighted: boolean;

    /**
     * The tab's ID. Tab IDs are unique within a browser session. The tab ID may also be set to
     * tabs.TAB_ID_NONE for browser windows that don't host content tabs (for example, devtools windows).
     * @member {number}
     */
    id?: number;

    /**
     * Whether the tab is in a private browsing window.
     * @member {boolean}
     */
    incognito: boolean;

    /**
     * The zero-based index of the tab within its window.
     * @member {number}
     */
    index: number;

    /**
     * True if the tab can be rendered in Reader Mode, false otherwise.
     * @member {boolean}
     */
    isArticle: boolean;

    /**
     * True if the tab is currently being rendered in Reader Mode, false otherwise.
     * @member {boolean}
     */
    isInReaderMode: boolean;

    /**
     * Time at which the tab was last accessed, in milliseconds since the epoch.
     * @member {number}
     */
    lastAccessed: number;

    /**
     * The current muted state for the tab and the reason for the last state change.
     * @member {[MutedInfo]}
     */
    mutedInfo?: MutedInfo;

    /**
     * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still
     * exists and is in the same window.
     * @member {[number]}
     */
    openerTabId?: number;

    /**
     * Whether the tab is pinned.
     * @member {boolean}
     */
    pinned: boolean;

    /**
     * Whether the tab is selected. This property has been replaced by active and highlighted.
     * @member {boolean}
     */
    selected: boolean;

    /**
     * The session ID used to uniquely identify a Tab obtained from the sessions API.
     * @member {[string]}
     */
    sessionId?: string;

    /**
     * Either loading or complete.
     * @member {[string]}
     */
    status?: string;

    /**
     * The ID of the tab's successor.
     * @member {[number]}
     */
    successorTabId?: number;

    /**
     * The title of the tab. Only present if the extension has the "tabs" permission or host permissions that
     * matches the tab's URL.
     * @member {string}
     */
    title?: string;

    /**
     * The URL of the document that the tab is displaying. Only present if the extension has the "tabs"
     * permission or a matching host permissions.
     * @member {string}
     */
    url?: string;

    /**
     * The width of the tab in pixels.
     * @member {[number]}
     */
    width?: number;

    /**
     * The ID of the window that hosts this tab.
     * @member {number}
     */
    windowId: number;

}