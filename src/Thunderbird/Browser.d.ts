import {Accounts} from './Accounts/Accounts';
import {AddressBooks} from './AddressBooks/AddressBooks';
import {ComposeScripts} from './ComposeScripts/ComposeScripts';
import {MessageDisplay} from './MessageDisplay/MessageDisplay';
import {MessageDisplayAction} from './MessageDisplayAction/MessageDisplayAction';
import {Tabs} from './Tabs/Tabs';
import {Browser as Super} from '../Firefox/Browser';
import {Windows} from './Windows/Windows';

/**
 * Browser for Thunderbird.
 * @see https://github.com/thundernest/developer-docs/blob/master/add-ons/mailextensions/supported-webextension-api.md
 */
export interface Browser extends Super {

    /**
     * @member {Accounts}
     */
    accounts: Accounts;

    /**
     * @member {AddressBooks}
     */
    addressBooks: AddressBooks;

    /**
     * @member {ComposeScripts}
     */
    composeScripts: ComposeScripts;

    /**
     * @member {MessageDisplay}
     */
    messageDisplay: MessageDisplay;

    /**
     * @member {MessageDisplayAction}
     */
    messageDisplayAction: MessageDisplayAction;

    /**
     * @member {Tabs}
     */
    tabs: Tabs;

    /**
     * @member {Windows}
     */
    windows: Windows;
}