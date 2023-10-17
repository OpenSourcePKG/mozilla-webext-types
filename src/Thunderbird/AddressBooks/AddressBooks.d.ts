import {Tab} from '../Tabs/Tab';
import {TEvent} from '../TEvent';
import {AddressBookNode} from './AddressBookNode';
import {AddressBooksProvider} from './AddressBooksProvider';

/**
 * The addressBooks API, also including the contacts and mailingLists namespaces, first appeared in Thunderbird 64.
 *
 * The Address Books sample extension uses this API.
 *
 * Permissions
 * 'addressBooks' Read and modify your address books and contacts
 * 'sensitiveDataUpload' Transfer sensitive user data (if access has been granted) to a remote server for further processing.
 *
 * The permission addressBooks is required to use messenger.addressBooks.*.
 * @see https://webextension-api.thunderbird.net/en/115/addressBooks.html
 */
export interface AddressBooks {

    /**
     * Opens the address book user interface.
     * @returns {Tab}
     */
    openUI(): Promise<Tab>;

    /**
     * Closes the address book user interface.
     */
    closeUI(): void;

    /**
     * Gets a list of the user’s address books, optionally including all contacts and mailing lists.
     *
     * Changes in Thunderbird 85
     * - Read-only address books are now returned as well as read-write books.
     * @param {boolean} complete - If set to true, results will include contacts and mailing lists for each address book.
     * @returns {AddressBookNode[]}
     */
    list(complete?: boolean): Promise<AddressBookNode[]>;

    /**
     * Gets a single address book, optionally including all contacts and mailing lists.
     * @param {string} id
     * @param {boolean} complete - If set to true, results will include contacts and mailing lists for this address book.
     * @returns {AddressBookNode}
     */
    get(
        id: string,
        complete?: boolean
    ): Promise<AddressBookNode>;

    /**
     * Creates a new, empty address book.
     * @param {object} properties
     * @returns {string} The id of the new address book.
     */
    create(properties: { name: string; }): Promise<string>;

    /**
     * Renames an address book.
     * @param {string} id
     * @param {object} properties
     */
    update(
        id: string,
        properties: { name: string; }
    ): void;

    /**
     * Removes an address book, and all associated contacts and mailing lists.
     * @param {string} id
     */
    delete(id: string): void;

    /**
     * Fired when an address book is created.
     */
    onCreated: TEvent<(node: AddressBookNode) => void>;

    /**
     * Fired when an address book is renamed.
     */
    onUpdated: TEvent<(node: AddressBookNode) => void>;

    /**
     * Fired when an addressBook is deleted.
     */
    onDeleted: TEvent<(id: string) => void>;

    /**
     * addressBooks.provider
     */
    provider: AddressBooksProvider;
}