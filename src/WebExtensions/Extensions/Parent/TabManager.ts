import {Tab} from './Tab';

/**
 * TabManager
 *
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#1804
 */
export interface TabManager {

    /**
     * get
     * @param tabId
     * @param _default
     */
    get(tabId: number, _default?: any): Tab;
}