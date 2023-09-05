import {NativeTab} from './NativeTab';
import {NativeTabInfo} from './NativeTabInfo';
import {Tab} from './Tab';

/**
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#1804
 */
export interface TabManager {

    /**
     * Returns a Tab wrapper for the tab with the given ID.
     * @param {number} tabId - The ID of the tab for which to return a wrapper.
     * @param {any} _default - The value to return if no tab exists with the given ID.
     * @returns {Tab} The wrapped tab, or the default value.
     */
    get<T>(tabId: number, _default?: T): Tab;

    /**
     * If the extension has requested activeTab permission, grant it those permissions for the current.
     * @param {NativeTabInfo} nativeTabInfo - The native tab for which to grant permissions.
     */
    addActiveTabPermission(nativeTabInfo: NativeTabInfo): void;

    /**
     * Revoke the extension's activeTab permissions for the current inner window of the given native tab.
     * @param {NativeTabInfo} nativeTabInfo - The native tab for which to revoke permissions.
     */
    revokeActiveTabPermission(nativeTabInfo: NativeTabInfo): void;

    /**
     * Determines access using extension context.
     * @param {NativeTab} nativeTab - The tab to check access on.
     * @returns {boolean} True if the extension has permissions for this tab.
     */
    canAccessTab(nativeTab: NativeTab): boolean;

    /**
     * Returns a new Tab instance wrapping the given native tab info.
     * @param {NativeTabInfo} nativeTabInfo - The native tab for which to return a wrapper.
     * @returns {Tab} The wrapped native tab
     */
    wrapTab(nativeTabInfo: NativeTabInfo): Tab;
}