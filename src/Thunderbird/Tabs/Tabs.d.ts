import {InjectDetails} from '../../Firefox/ExtensionTypes/InjectDetails';
import {Port} from '../../Firefox/Runtime/Port';
import {TEvent} from '../TEvent';
import {Tab} from './Tab';
import {TabStatus} from './TabStatus';
import {TabsUpdateEvent} from './TabsUpdateEvent';
import {WindowType} from './WindowType';

/**
 * tabs
 * The tabs API supports creating, modifying and interacting with tabs in Thunderbird windows.
 *
 * Permissions
 * 'activeTab'
 * 'tabs' Access browser tabs
 * 'tabHide' Hide and show browser tabs
 *
 * @see https://webextension-api.thunderbird.net/en/115/tabs.html
 */
export interface Tabs {

    /**
     * get
     * Retrieves details about the specified tab.
     *
     * @param tabId
     */
    get(tabId: number): Promise<Tab>;

    /**
     * getCurrent
     * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context
     * (for example: a background page or popup view).
     */
    getCurrent(): Promise<Tab>;

    /**
     * connect
     * [Added in TB 82, backported to TB 78.4.0]
     * Connects to the content script(s) in the specified tab. The runtime.onConnect event is fired in each content
     * script running in the specified tab for the current extension. For more details, see Content Script Messaging.
     *
     * @param tabId
     * @param connectInfo
     * @return A port that can be used to communicate with the content scripts running in the specified tab.
     */
    connect(
        tabId: number,
        connectInfo: {

            /**
             * frameId
             * Open a port to a specific frame identified by frameId instead of all frames in the tab.
             */
            frameId?: number;

            /**
             * name
             * Will be passed into onConnect for content scripts that are listening for the connection event.
             */
            name?: string;
        }): Promise<Port>;

    /**
     * sendMessage
     * [Added in TB 82, backported to TB 78.4.0]
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a
     * response is sent back. The runtime.onMessage event is fired in each content script running in the
     * specified tab for the current extension.
     *
     * @param tabId
     * @param message
     * @param options
     * @return The JSON response object sent by the handler of the message. If an error occurs while connecting to the
     * specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    sendMessage(
        tabId: number,
        message: any,
        options?: {

            /**
             * frameId
             * Send a message to a specific frame identified by frameId instead of all frames in the tab.
             */
            frameId?: number;
        }): Promise<any>;

    /**
     * create
     * Creates a new content tab. Use the messageDisplay to open messages. Only supported in normal windows.
     * Same-site links in the loaded page are opened within Thunderbird, all other links are opened in the user’s
     * default browser. To override this behavior, add-ons have to register a content script , capture click events
     * and handle them manually.
     *
     * @param createProperties
     * @return Details about the created tab. Will contain the ID of the new tab.
     */
    create(

        /**
         * createProperties
         * Properties for the new tab. Defaults to an empty tab, if no url is provided.
         */
        createProperties: {

            /**
             * active
             * Whether the tab should become the active tab in the window. Does not affect whether the window is
             * focused (see update(windowId, updateInfo)). Defaults to true.
             */
            active?: boolean;

            /**
             * cookieStoreId
             * The CookieStore id the new tab should use. Either a custom id created using the
             * contextualIdentities API, or a built-in one: firefox-default, firefox-container-1,
             * firefox-container-2, firefox-container-3, firefox-container-4, firefox-container-5. Note:
             * The naming pattern was deliberately not changed for Thunderbird, but kept for compatibility reasons.
             */
            cookieStoreId?: string;

            /**
             * index
             * The position the tab should take in the window. The provided value will be clamped to between zero
             * and the number of tabs in the window.
             */
            index?: number;

            /**
             * selected
             * Unsupported!
             * Whether the tab should become the selected tab in the window. Defaults to true
             */
            selected?: boolean;

            /**
             * url
             * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme
             * (i.e. http://www.google.com, not www.google.com). Relative URLs will be relative to the current page
             * within the extension.
             */
            url?: string;

            /**
             * windowId
             * The window to create the new tab in. Defaults to the current window.
             */
            windowId?: number;
        }
    ): Promise<Tab>;

    /**
     * duplicate
     * Duplicates a tab.
     *
     * @param tabId The ID of the tab which is to be duplicated.
     * @return Details about the duplicated tab. The Tab object doesn’t contain url, title and favIconUrl if the tabs permission has not been requested.
     */
    duplicate(tabId: number): Promise<Tab>;

    /**
     * query
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     *
     * @param queryInfo
     */
    query(
        queryInfo?: {

            /**
             * active
             * Whether the tabs are active in their windows.
             */
            active?: boolean;

            /**
             * cookieStoreId
             * The CookieStore id(s) used by the tabs. Either custom ids created using the contextualIdentities API,
             * or built-in ones: firefox-default, firefox-container-1, firefox-container-2, firefox-container-3,
             * firefox-container-4, firefox-container-5. Note: The naming pattern was deliberately not changed for
             * Thunderbird, but kept for compatibility reasons.
             */
            cookieStoreId?: string|string[];

            /**
             * currentWindow
             * Whether the tabs are in the current window.
             */
            currentWindow?: boolean;

            /**
             * highlighted
             * Whether the tabs are highlighted. Works as an alias of active.
             */
            highlighted?: boolean;

            /**
             * index
             * The position of the tabs within their windows.
             */
            index?: number;

            /**
             * lastFocusedWindow
             * Whether the tabs are in the last focused window.
             */
            lastFocusedWindow?: boolean;

            /**
             * mailTab
             * Whether the tab is a Thunderbird 3-pane tab.
             */
            mailTab?: boolean;

            /**
             * spaceId
             * The id of the space the tabs should belong to.
             */
            spaceId?: number;

            /**
             * status
             * Whether the tabs have completed loading.
             */
            status?: TabStatus;

            /**
             * title
             * Match page titles against a pattern.
             */
            title?: string;

            /**
             * type
             * [Added in TB 91]
             * Match tabs against the given Tab.type (see Tab). Ignored if queryInfo.mailTab is specified.
             */
            type?: string;

            /**
             * url
             * Match tabs against one or more URL Patterns. Note that fragment identifiers are not matched.
             */
            url?: string|string[];

            /**
             * windowId
             * The ID of the parent window, or WINDOW_ID_CURRENT for the current window.
             */
            windowId?: number;

            /**
             * windowType
             * The type of window the tabs are in.
             */
            windowType?: WindowType;
        }
    ): Promise<Tab[]>;

    /**
     * update
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     *
     * @param tabId
     * @param updateProperties
     */
    update(

        /**
         * tabId
         * Defaults to the selected tab of the current window.
         */
        tabId: number,

        /**
         * updateProperties
         * Properties which should to be updated.
         */
        updateProperties: {

            /**
             * active
             * Set this to true, if the tab should become active. Does not affect whether the window is focused
             * (see update(windowId, updateInfo)). Setting this to false has no effect.
             */
            active?: boolean;

            /**
             * url
             * A URL of a page to load. If the URL points to a content page (a web page, an extension page or a
             * registered WebExtension protocol handler page), the tab will navigate to the requested page.
             * All other URLs will be opened externally without changing the tab. Note: This function will throw an
             * error, if a content page is loaded into a non-content tab (its type must be either content or mail).
             */
            url?: string;
        }
    ): Promise<Tab>;

    /**
     * move
     * Moves one or more tabs to a new position within its current window, or to a different window.
     * Note that tabs can only be moved to and from windows of type normal.
     *
     * @param tabIds
     * @param moveProperties
     */
    move(
        tabIds: number|number[],
        moveProperties: {
            index: number;
            windowId?: number;
        }
    ): Promise<Tab[]>;

    /**
     * reload
     * Reload a tab. Only applicable for tabs which display a content page.
     *
     * @param tabId
     * @param reloadProperties
     */
    reload(

        /**
         * tabId
         * The ID of the tab to reload; defaults to the selected tab of the current window.
         */
        tabId?: number,

        /**
         * reloadProperties
         */
        reloadProperties?: {

            /**
             * bypassCache
             * Whether using any local cache. Default is false.
             */
            bypassCache?: boolean;
        }
    ): void;

    /**
     * remove
     *
     * @param tabIds The tab or list of tabs to close.
     */
    remove(tabIds: number|number[]): void;

    /**
     * executeScript
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     *
     * Changes in Thunderbird 77:
     * With the compose permission, this now works in the document of email messages during composition.
     *
     * @param tabId The ID of the tab in which to run the script; defaults to the active tab of the current window.
     * @param details Details of the script to run.
     * @return The result of the script in every injected frame.
     */
    executeScript(tabId: number|undefined, details: InjectDetails): Promise<any[]>;

    /**
     * insertCSS
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     *
     * Changes in Thunderbird 77
     * With the compose permission, this now works in the document of email messages during composition.
     *
     * @param tabId The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the CSS text to insert.
     */
    insertCSS(tabId: number|undefined, details: InjectDetails): void;

    /**
     * removeCSS
     * Removes injected CSS from a page. For details, see the programmatic injection section of the content scripts doc.
     *
     * Changes in Thunderbird 77
     * With the compose permission, this now works in the document of email messages during composition.
     *
     * @param tabId The ID of the tab from which to remove the injected CSS; defaults to the active tab of the current window.
     * @param details Details of the CSS text to remove.
     */
    removeCSS(tabId: number|undefined, details: InjectDetails): void;

    /**
     * onCreated
     * Fired when a tab is created. Note that the tab’s URL may not be set at the time this event fired, but you can
     * listen to onUpdated events to be notified when a URL is set.
     *
     */
    onCreated: TEvent<(

        /**
         * tab
         * Details of the tab that was created.
         */
        tab: Tab
    ) => void>;

    /**
     * onUpdated
     * Fired when a tab is updated.
     */
    onUpdated: TabsUpdateEvent<(

        /**
         * tabId
         */
        tabId: number,

        /**
         * changeInfo
         * Lists the changes to the state of the tab that was updated.
         */
        changeInfo: {

            /**
             * favIconUrl
             * The tab’s new favicon URL.
             */
            favIconUrl?: string;

            /**
             * status
             * The status of the tab. Can be either loading or complete.
             */
            status?: string;

            /**
             * url
             * The tab’s URL if it has changed.
             */
            url?: string;
        },

        /**
         * tab
         * Gives the state of the tab that was updated.
         */
        tab: Tab
    ) => void>;

    /**
     * onMoved
     * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user
     * directly moved. Move events are not fired for the other tabs that must move in response. This event is not
     * fired when a tab is moved between windows. For that, see onDetached.
     */
    onMoved: TEvent<(

        /**
         * tabId
         */
        tabId: number,

        /**
         * moveInfo
         */
        moveInfo: {
            fromIndex: number;
            toIndex: number;
            windowId: number;
        }
    ) => void>;

    /**
     * onActivated
     * Fires when the active tab in a window changes. Note that the tab’s URL may not be set at the time this
     * event fired, but you can listen to onUpdated events to be notified when a URL is set.
     */
    onActivated: TEvent<(

        /**
         * activeInfo
         */
        activeInfo: {

            /**
             * tabId
             * The ID of the tab that has become active.
             */
            tabId: number;

            /**
             * windowId
             * The ID of the window the active tab changed inside of.
             */
            windowId: number;

            /**
             * previousTabId
             * The ID of the tab that was previously active, if that tab is still open.
             */
            previousTabId?: number;
        }
    ) => void>;

    /**
     * onDetached
     * Fired when a tab is detached from a window, for example because it is being moved between windows.
     */
    onDetached: TEvent<(

        /**
         * tabId
         */
        tabId: number,

        /**
         * detachInfo
         */
        detachInfo: {
            oldPosition: number;
            oldWindowId: number;
        }
    ) => void>;

    /**
     * onAttached
     * Fired when a tab is attached to a window, for example because it was moved between windows.
     */
    onAttached: TEvent<(

        /**
         * tabId
         */
        tabId: number,

        /**
         * attachInfo
         */
        attachInfo: {
            newPosition: number;
            newWindowId: number;
        }
    ) => void>;

    /**
     * onRemoved
     * Fired when a tab is closed.
     */
    onRemoved: TEvent<(

        /**
         * tabId
         */
        tabId: number,

        /**
         * removeInfo
         */
        removeInfo: {

            /**
             * isWindowClosing
             * Is true when the tab is being closed because its window is being closed.
             */
            isWindowClosing: boolean;

            /**
             * windowId
             * The window whose tab is closed.
             */
            windowId: number;
        }
    ) => void>;
}