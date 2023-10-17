/**
 * @see https://webextension-api.thunderbird.net/en/115/addressBooks.provider.html
 */
export interface AddressBooksProviderEvent<EventListener> {

    /**
     * Parameters for onSearchRequest.addListener(listener, parameters).
     * @param {EventListener} listener - A function that will be called when this event occurs.
     * @param {object} parameters - Descriptions for the address book created by registering this listener.
     * @returns {any}
     */
    addListener(

        /**
         * A function that will be called when this event occurs.
         */
        listener: EventListener,

        /**
         * Descriptions for the address book created by registering this listener.
         */
        parameters: {

            /**
             * The name of the created address book.
             * @member {string}
             */
            addressBookName?: string;

            /**
             * The unique ID of the created address book. If several listeners have been added,
             * the id allows to identify which address book initiated the search request.
             * If not provided, a unique ID will be generated for you.
             * @member {string}
             */
            id?: string;

            /**
             * Whether the address book search queries are using encrypted protocols like HTTPS.
             * @member {string}
             */
            isSecure?: string;
        }): any;

    removeListener(listener: EventListener): any;
    hasListener(listener: EventListener): any;
}