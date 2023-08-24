import {Accounts} from './Accounts/Accounts';
import {AddressBooks} from './AddressBooks/AddressBooks';
import {ComposeScripts} from './ComposeScripts/ComposeScripts';
import {MessageDisplay} from './MessageDisplay/MessageDisplay';
import {Tabs} from './Tabs/Tabs';
import {Browser as Super} from '../Firefox/Browser';

/**
 * Browser
 * https://github.com/thundernest/developer-docs/blob/master/add-ons/mailextensions/supported-webextension-api.md
 */
export interface Browser extends Super {

    /**
     * accounts
     */
    accounts: Accounts;

    /**
     * addressBooks
     */
    addressBooks: AddressBooks;

    /**
     * composeScripts
     */
    composeScripts: ComposeScripts;

    /**
     * messageDisplay
     */
    messageDisplay: MessageDisplay;

    /**
     * tabs
     */
    tabs: Tabs;
}