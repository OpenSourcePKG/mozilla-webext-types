import {ContactNode} from '../Contacts/ContactNode';
import {NodeType} from '../NodeType';

/**
 * MailingListNode
 * A node representing a mailing list.
 *
 * @see https://webextension-api.thunderbird.net/en/115/mailingLists.html#mailinglists-mailinglistnode
 */
export interface MailingListNode {

    /**
     * description
     */
    description: string;

    /**
     * id
     * The unique identifier for the node. IDs are unique within the current profile, and they remain valid
     * even after the program is restarted.
     */
    id: string;

    /**
     * name
     */
    name: string;

    /**
     * nickName
     */
    nickName: string;

    /**
     * type
     * Always set to mailingList.
     */
    type: NodeType;

    /**
     * contacts
     * A list of contacts held by this node’s address book or mailing list.
     */
    contacts?: ContactNode[];

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
     * [Added in TB 91] Indicates if the object came from a remote address book.
     */
    remote?: boolean;
}