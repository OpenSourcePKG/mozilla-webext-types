import {Tab} from '../Tabs/Tab';
import {TEvent} from '../TEvent';
import {AddressBookNode} from './AddressBookNode';
import {AddressBooksProvider} from './AddressBooksProvider';

/**
 * addressBooks
 * The addressBooks API, also including the contacts and mailingLists namespaces, first appeared in Thunderbird 64.
 *
 * The Address Books sample extension uses this API.
 *
 * Permissions
 * 'addressBooks' Read and modify your address books and contacts
 * 'sensitiveDataUpload' Transfer sensitive user data (if access has been granted) to a remote server for further processing
 *
 * The permission addressBooks is required to use messenger.addressBooks.*.
 *
 * @see https://webextension-api.thunderbird.net/en/115/addressBooks.html
 */
export interface AddressBooks {

    /**
     * openUI
     * Opens the address book user interface.
     */
    openUI(): Promise<Tab>;

    /**
     * closeUI
     * Closes the address book user interface.
     */
    closeUI(): void;

    /**
     * list
     * Gets a list of the user’s address books, optionally including all contacts and mailing lists.
     *
     * Changes in Thunderbird 85
     * - Read-only address books are now returned as well as read-write books.
     *
     * @param complete If set to true, results will include contacts and mailing lists for each address book.
     */
    list(complete?: boolean): Promise<AddressBookNode[]>;

    /**
     * get
     * Gets a single address book, optionally including all contacts and mailing lists.
     *
     * @param id
     * @param complete If set to true, results will include contacts and mailing lists for this address book.
     */
    get(
        id: string,
        complete?: boolean
    ): Promise<AddressBookNode>;

    /**
     * create
     * Creates a new, empty address book.
     *
     * @param properties
     * @return The id of the new address book.
     */
    create(properties: { name: string; }): Promise<string>;

    /**
     * update
     * Renames an address book.
     *
     * @param id
     * @param properties
     */
    update(
        id: string,
        properties: { name: string; }
    ): void;

    /**
     * delete
     * Removes an address book, and all associated contacts and mailing lists.
     *
     * @param id
     */
    delete(id: string): void;

    /**
     * onCreated
     * Fired when an address book is created.
     */
    onCreated: TEvent<(node: AddressBookNode) => void>;

    /**
     * onUpdated
     * Fired when an address book is renamed.
     */
    onUpdated: TEvent<(node: AddressBookNode) => void>;

    /**
     * onDeleted
     * Fired when an addressBook is deleted.
     */
    onDeleted: TEvent<(id: string) => void>;

    /**
     * provider
     * addressBooks.provider
     */
    provider: AddressBooksProvider;
}