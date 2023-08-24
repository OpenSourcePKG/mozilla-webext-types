/**
 * AddressBooksProviderEvent
 *
 * @see https://webextension-api.thunderbird.net/en/115/addressBooks.provider.html
 */
export interface AddressBooksProviderEvent<EventListener> {

    /**
     * addListener
     * Parameters for onSearchRequest.addListener(listener, parameters)
     *
     * @param listener A function that will be called when this event occurs.
     * @param parameters Descriptions for the address book created by registering this listener.
     */
    addListener(

        /**
         * listener
         * A function that will be called when this event occurs.
         */
        listener: EventListener,

        /**
         * parameters
         * Descriptions for the address book created by registering this listener.
         */
        parameters: {

            /**
             * addressBookName
             * The name of the created address book.
             */
            addressBookName?: string;

            /**
             * id
             * The unique ID of the created address book. If several listeners have been added,
             * the id allows to identify which address book initiated the search request.
             * If not provided, a unique ID will be generated for you.
             */
            id?: string;

            /**
             * isSecure
             * Whether the address book search queries are using encrypted protocols like HTTPS.
             */
            isSecure?: string;
        }): any;

    removeListener(listener: EventListener): any;
    hasListener(listener: EventListener): any;
}