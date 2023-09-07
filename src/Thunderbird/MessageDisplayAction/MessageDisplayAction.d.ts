import {Tab} from '../Tabs/Tab';
import {TEvent} from '../TEvent';

/**
 * Information sent when a messageDisplayAction button is clicked.
 */
export type OnClickData = {
    modifiers: string[];
    button?: number;
};

/**
 * The messageDisplayAction API was added in Thunderbird 68. It is similar to Firefox’s browserAction
 * API and can be combined with the messageDisplay API to determine the currently displayed
 * message.
 *
 * Use a messageDisplayAction to put a button in the message display toolbar. In addition to its icon, a
 * messageDisplayAction button can also have a tooltip, a badge, and a popup.
 * @see https://webextension-api.thunderbird.net/en/115/messageDisplayAction.html
 */
export interface MessageDisplayAction {

    setTitle(): void;

    onClicked: TEvent<(
        tab: Tab,
        info?: OnClickData
    ) => void>;
}