import {AddressBookNode} from './AddressBookNode';
import {AddressBooksProviderEvent} from './AddressBooksProviderEvent';

/**
 * AddressBooksProvider
 *
 * The address book provider API first appeared in Thunderbird 90. It allows to add address books,
 * which are not stored or cached by Thunderbird itself, but are handled completely by the extension.
 * Address books created by the this API will forward all access requests to the WebExtension.
 * Possible use cases:
 *
 * - implement a custom storage
 * - implement search-only address books querying a remote server
 *
 * So far, only the API for search-only address books is implemented.
 *
 * Warning:
 * This API will change in future releases of Thunderbird.
 *
 * Permissions
 * 'addressBooks' Read and modify your address books and contacts
 * 'sensitiveDataUpload' Transfer sensitive user data (if access has been granted) to a remote server for further processing
 *
 * Note:
 * The permission addressBooks is required to use messenger.addressBooks.provider.*.
 *
 * @see https://webextension-api.thunderbird.net/en/115/addressBooks.provider.html
 */
export interface AddressBooksProvider {

    /**
     * onSearchRequest
     * Registering this listener will create and list a read-only address book in Thunderbird’s address book window,
     * similar to LDAP address books. When selecting this address book, users will first see no contacts,
     * but they can search for them, which will fire this event. Contacts returned by the listener callback will be
     * displayed as contact cards in the address book. Several listeners can be registered, to create multiple address books.
     *
     * The event also fires for each registered listener (for each created read-only address book), when users
     * type something into the mail composer’s To: field, or into similar fields like the calendar meeting
     * attendees field. Contacts returned by the listener callback will be added to the
     * autocomplete results in the dropdown of that field.
     */
    onSearchRequest: AddressBooksProviderEvent<(node: AddressBookNode, searchString?: string, query?: string) => void>;
}