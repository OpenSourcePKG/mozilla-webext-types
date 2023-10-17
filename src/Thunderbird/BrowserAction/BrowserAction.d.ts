import {Tab} from '../Tabs/Tab';
import {TEvent} from '../TEvent';
import {OnClickData} from './OnClickData';

/**
 * The browserAction API first appeared in Thunderbird 64. It is very similar to Firefox’s browserAction API.
 * @see https://webextension-api.thunderbird.net/en/stable/browserAction.html
 */
export declare interface BrowserAction {

    /**
     * Sets the title of the action button. Is used as tooltip and as the label.
     * @param {object} details
     */
    setTitle(details: {

        /**
         * A string the action button should display as its label and when moused over.
         * Cleared by setting it to null or an empty string (title defined the manifest will be used).
         * @member {string|null}
         */
        title: string|null;

        /**
         * Sets the title only for the given tab.
         * @member {number}
         */
        tabId?: number;

        /**
         * Will throw an error if used. Unsupported.
         * @member {number}
         */
        windowId?: number;
    }): void;

    /**
     * Gets the title of the action button.
     * @param {object} details
     * @returns {string}
     */
    getTitle(details: {

        /**
         * Specifies for which tab the title should be retrieved. If no tab is specified, the global value is retrieved.
         * @member {number}
         */
        tabId?: number;

        /**
         * Will throw an error if used.
         * @member {number}
         */
        windowId?: number;
    }): Promise<string>;

    // TODO

    /**
     * Fired when an action button is clicked. This event will not fire if the action has a popup.
     * This is a user input event handler. For asynchronous listeners some restrictions apply.
     */
    onClicked: TEvent<(
        tab: Tab,
        info?: OnClickData
    ) => void>;

}