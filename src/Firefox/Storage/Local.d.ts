export declare interface Local {

    /**
     * Retrieves one or more items from the storage area.
     * @param {any} keys - A key (string) or keys (an array of strings, or an object specifying default values) to
     * identify the item(s) to be retrieved from storage. If you pass an empty object or array here, an empty object
     * will be retrieved. If you pass null, or an undefined value, the entire storage contents will be retrieved.
     * @returns {any} A Promise that resolves to a results object, containing every object in keys that was found in
     * the storage area. If keys is an object, keys that are not found in the storage area will have their values
     * given by the keys object.
     */
    get(keys?: any): Promise<any>;

    /**
     * Stores one or more items in the storage area, or update existing items.
     * @param {any} keys - An object containing one or more key/value pairs to be stored in storage.
     * If an item already exists, its value will be updated.
     * @returns {any} A Promise that will be fulfilled with no arguments if the operation succeeded.
     * If the operation failed, the promise will be rejected with an error message.
     */
    set(keys: any): Promise<any>;
}