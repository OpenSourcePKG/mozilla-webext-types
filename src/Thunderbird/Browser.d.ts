import {Accounts} from './Accounts/Accounts';
import {AddressBooks} from './AddressBooks/AddressBooks';
import {BrowserAction} from './BrowserAction/BrowserAction';
import {ComposeScripts} from './ComposeScripts/ComposeScripts';
import {MessageDisplay} from './MessageDisplay/MessageDisplay';
import {MessageDisplayAction} from './MessageDisplayAction/MessageDisplayAction';
import {Messages} from './Messages/Messages';
import {Tabs} from './Tabs/Tabs';
import {Browser as Super} from '../Firefox/Browser';
import {Windows} from './Windows/Windows';

/**
 * Browser for Thunderbird.
 * @see https://github.com/thundernest/developer-docs/blob/master/add-ons/mailextensions/supported-webextension-api.md
 */
export interface Browser extends Super {

    /**
     * Enables an extension to access information of accounts and identities configured in Thunderbird’s account manager.
     * @member {Accounts}
     */
    accounts: Accounts;

    /**
     * Enables an extension to access, modify, create and delete Thunderbird address books.
     * @member {AddressBooks}
     */
    addressBooks: AddressBooks;

    /**
     * Enables an extension to interact with a browser action button.
     * @member {BrowserAction}
     */
    browserAction: BrowserAction;

    /**
     * Unctionally is the same as the contentScripts API except that it works on the document of email messages during composition.
     * @member {ComposeScripts}
     */
    composeScripts: ComposeScripts;

    /**
     * Enables an extension to react on and interact with the currently displayed messages.
     * @member {MessageDisplay}
     */
    messageDisplay: MessageDisplay;

    /**
     * Enables an extension to interact with a message display action button.
     * @member {MessageDisplayAction}
     */
    messageDisplayAction: MessageDisplayAction;

    /**
     * The messages API first appeared in Thunderbird 66.
     */
    messages: Messages;

    /**
     * Enables an extension to interact with Thunderbird’s tab system. It allows to create, modify, and rearrange
     * tabs and to communicate with scripts in tabs.
     * @member {Tabs}
     */
    tabs: Tabs;

    /**
     * Enables an extension to interact with Thunderbird’s windows which can contain webpage tabs and also with other
     * window types like composer or address books that cannot contain webpage tabs. You can use this API to create,
     * modify, and rearrange windows.
     * @member {Windows}
     */
    windows: Windows;
}