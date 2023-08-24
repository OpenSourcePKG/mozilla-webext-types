import {ContactNode} from '../Contacts/ContactNode';
import {MailingListNode} from '../MailingLists/MailingListNode';
import {NodeType} from '../NodeType';

/**
 * AddressBookNode
 * A node representing an address book.
 * @see https://webextension-api.thunderbird.net/en/115/addressBooks.html#addressbooknode
 */
export interface AddressBookNode {

    /**
     * id
     * The unique identifier for the node. IDs are unique within the current profile,
     * and they remain valid even after the program is restarted.
     */
    id: string;

    /**
     * name
     */
    name: string;

    /**
     * type
     * Always set to addressBook.
     */
    type: NodeType;

    /**
     * contacts
     * A list of contacts held by this node’s address book or mailing list.
     */
    contacts?: ContactNode[];

    /**
     * mailingLists
     * A list of mailingLists in this node’s address book.
     */
    mailingLists?: MailingListNode[];

    /**
     * parentId
     * The id of the parent object.
     */
    parentId?: string;

    /**
     * readOnly
     * Indicates if the object is read-only.
     */
    readOnly?: boolean;

    /**
     * remote
     * [Added in TB 91] Indicates if the address book is accessed via remote look-up.
     */
    remote?: boolean;
}