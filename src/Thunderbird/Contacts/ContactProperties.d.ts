/**
 * ContactProperties
 * A set of individual properties for a particular contact, and its vCard string.
 * Further information can be found in Working with vCard Contacts.
 */
export interface ContactProperties {

    /**
     * <custom properties>
     * Custom properties are not saved in the users vCard. Therefore, they are not transferred to the users server,
     * if the contact is stored on a remote CardDAV server. Names of custom properties may include a-z, A-Z, 1-9 and _.
     *
     * <legacy properties>
     * Legacy properties point to certain fields in the contacts vCard string and provide direct read/write access.
     */
    [key: string]: any;

    /**
     * vCard
     * [Added in TB 102] The contacts vCard string.
     */
    vCard: string;
}