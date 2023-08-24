import {NodeType} from '../NodeType';
import {ContactProperties} from './ContactProperties';

/**
 * ContactNode
 * A node representing a contact in an address book.
 */
export interface ContactNode {

    /**
     * id
     * The unique identifier for the node. IDs are unique within the current profile,
     * and they remain valid even after the program is restarted.
     */
    id: string;

    /**
     * properties
     */
    properties: ContactProperties;

    /**
     * type
     * Always set to contact.
     */
    type: NodeType;

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
     * Indicates if the object came from a remote address book.
     */
    remote?: boolean;
}