/**
 * AddressBookManager
 */
export interface AddressBookManager {

    /**
     * findAddressBookById
     */
    findAddressBookById(id: string): any;

    /**
     * findContactById
     * @param id
     * @param bookHint
     */
    findContactById(id: string, bookHint: any): any;

    /**
     * findMailingListById
     * @param id
     */
    findMailingListById(id: string): any;

    /**
     * convert
     * @param node
     * @param complete
     */
    convert(node: any, complete: boolean): any;
}